# ETFG Business Intelligence

## Setup:
```
git clone git@github.com/JulianHinsch/etfg.git
cd etfg
composer install
cd angular
npm install
```

## Serve angular front-end in dev mode:
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
ng build
```

Then, add the angular dist folder's contents to the the php public folder.

## To host:
1. Build the front-end with the --env=prod tag.
2. Add the angular dist folder's contents to the php public folder
2. Compress the root directory's contents.
3. Upload and deploy

## To-Do
- Add API endpoint authentication with Access Tokens
- Fix loading system on tables so that the spinner shows until the data is ready.
- Configure HTTPS and a real domain name

