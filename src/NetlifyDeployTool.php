<?php

namespace Grrr\NetlifyDeploy;

use Illuminate\Http\Request;
use Laravel\Nova\Menu\MenuSection;
use Laravel\Nova\Nova;
use Laravel\Nova\Tool;

class NetlifyDeployTool extends Tool
{
    /**
     * Perform any tasks that need to happen when the tool is booted.
     *
     * @return void
     */
    public function boot()
    {
        Nova::script("netlify-deploy-tool", __DIR__ . "/../dist/js/tool.js");
    }

    /**
     * Build the menu that renders the navigation links for the tool.
     *
     * @param  \Illuminate\Http\Request $request
     * @return mixed
     */
    public function menu(Request $request)
    {
        return MenuSection::make("Publish website")
            ->path("/netlify-deploy-tool")
            ->icon("paper-airplane");
    }
}
