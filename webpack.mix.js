let mix = require("laravel-mix");

require("./nova.mix");

mix.setPublicPath("dist")
    .js("resources/js/tool.js", "js")
    .js("resources/js/card.js", "js")
    .vue({ version: 3 })
    .nova("grrr-amsterdam/nova-netlify-deploy");
