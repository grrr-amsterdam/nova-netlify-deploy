<?php

namespace Grrr\NetlifyDeploy;

use Grrr\NetlifyDeploy\Http\Middleware\Authorize;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Http\Middleware\Authenticate;
use Laravel\Nova\Nova;

class NetlifyDeployServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->booted(function () {
            $this->routes();
        });

        Nova::serving(function (ServingNova $event) {
            Nova::script(
                "netlify-deploy-card",
                __DIR__ . "/../dist/js/card.js"
            );
        });

        $this->publishes([
            __DIR__ . "/../config/netlify-deploy.php" => config_path(
                "netlify-deploy.php"
            ),
        ]);
    }

    /**
     * Register the card's routes.
     *
     * @return void
     */
    protected function routes()
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Nova::router(
            ["nova", Authenticate::class, Authorize::class],
            "netlify-deploy-tool"
        )->group(__DIR__ . "/../routes/inertia.php");

        Route::middleware(["nova", Authorize::class])
            ->prefix("nova-vendor/netlify-deploy-tool")
            ->group(__DIR__ . "/../routes/api.php");
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
