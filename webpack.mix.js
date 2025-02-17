let mix = require('laravel-mix');

mix.setPublicPath('public')
   .js('./resources/js/app.js', 'public/js/app.js')
   .sass('./resources/scss/app.scss', 'public/css/app.css');