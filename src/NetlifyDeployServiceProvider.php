<?php

namespace Grrr\NetlifyDeploy;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
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
        $this->loadViewsFrom(__DIR__ . "/../resources/views", "netlify-deploy");

        $this->app->booted(function () {
            $this->routes();
        });

        Nova::serving(function (ServingNova $event) {
            Nova::script("netlify-deploy", __DIR__ . "/../dist/js/tool.js");
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

        Route::middleware(["nova"])
            ->prefix("nova-vendor/netlify-deploy")
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
