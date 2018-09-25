# ETFG

Minimum viable product/proof of concept for ETF Global's Business Intelligence Application.
Analyze queries about various ETFs (Exchange Traded Funds).

MySQL, PHP Laravel framework and Angular V client.

'Material Design' tables and other UI elements.

Client-side authentication using auth0.js.

Sample data from October 2013 - March 2017.  (Eventually, live data could be added with a cron-job.)

## Setup:

```
git clone git@github.com/JulianHinsch/etfg.git
cd etfg
composer install
cd angular
npm install
```

## Configuration:

1.  Add 'EXTERNAL_DATABASE_URL' environment variable
2.  Add auth0 credentials in angular/src/app/auth/auth0-variables.ts

## To serve angular front-end in dev mode:

```
cd angular
ng serve
```

## Serve laravel back-end:
```
php artisan serve
```

## Build angular front-end:
```
cd angular
ng build --env=prod
```

## Deploy:

1.  Build and add the angular dist folder's contents to the laravel public folder.
2.  Deploy with git or compress the root folder.

## To-Do:

- API should validate HTTP requests with Access Tokens.
- Fix loading flags on tables so that a spinner shows until the data is ready.
- Improve ordering of search results.
- Add a '404' page, improve client error handling.
