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

##To-Do
- Add API endpoint authentication with Access Tokens
- Add Auth Roles - Student, Professional, SuperUser, Admin
- Add Pie Charts
- Fix Pagination/Sort on tables
- Fix 'isLoading' system on tables so that the spinner shows until the data is ready.
- Configure HTTPS and a real domain name
- Fix decimal percentages coming out with commas i.e. 7,5% -> 7.5%
- Fix formatting error in tables with large portfolios
- Discuss payment system
- Test search (IWOO)
- Add a message for a search that returns no results

