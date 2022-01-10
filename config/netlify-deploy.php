<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Netlify credentials
    |--------------------------------------------------------------------------
    |
    | Used to connect with the Netlify API.
    | Create a new token here: https://app.netlify.com/user/applications/personal
    |
    */
    'access_token' => env('NETLIFY_ACCESS_TOKEN'),

    /*
    |--------------------------------------------------------------------------
    | Netlify site ID
    |--------------------------------------------------------------------------
    |
    | This is the site you wish to deploy from the CMS.
    | You can find this under *Site Settings*, listed under *Site information* as *API ID*.
    |
    */
    'site_id' => env('NETLIFY_SITE_ID'),
];
