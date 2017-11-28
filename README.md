#ETFG - Laravel - Angular

##Steps to Setup:
```
git clone git@github.com/JulianHinsch/etfg.git
cd etfg
composer install
cd angular
npm install
```

##To serve angular front-end in dev mode:
```
cd angular
ng serve
```

##To serve laravel back-end:
```
php artisan serve
```

##To build angular front-end:
```
cd angular
ng build
```

Then, add the angular dist folder's contents to the the php public folder.

##To host on AWS:
1. Build the front-end with the --env=prod tag.
2. Add the angular dist folder's contents to the php public folder
2. Compress the root directory's contents.
3. Upload and deploy
