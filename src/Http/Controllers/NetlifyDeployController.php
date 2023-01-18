<?php

namespace Grrr\NetlifyDeploy\Http\Controllers;

use Grrr\NetlifyDeploy\Events\PublicationWasStarted;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Client\PendingRequest;
use Illuminate\Support\Facades\Http;

class NetlifyDeployController
{
    private PendingRequest $netlify;
    private string $siteId;

    public function __construct()
    {
        $accessToken = config("netlify-deploy.access_token");
        $siteId = config("netlify-deploy.site_id");
        if (!$accessToken || !$siteId) {
            throw new \Exception("Unable to read Netlify credentials.");
        }
        $this->netlify = Http::withToken($accessToken);
        $this->siteId = $siteId;
    }

    public function status(): JsonResponse
    {
        $deploys = collect(
            $this->netlify
                ->get(
                    "https://api.netlify.com/api/v1/sites/{$this->siteId}/deploys"
                )
                ->throw()
                ->json()
        );

        $productionDeploy = $deploys->first(
            fn($deploy) => $deploy["context"] === "production"
        );
        return response()->json($productionDeploy);
    }

    public function deploy(): JsonResponse
    {
        event(new PublicationWasStarted());
        return response()->json(
            $this->netlify
                ->post(
                    "https://api.netlify.com/api/v1/sites/{$this->siteId}/builds"
                )
                ->throw()
                ->json()
        );
    }
}
