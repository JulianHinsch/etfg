webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_landing_landing_component__ = __webpack_require__("../../../../../src/app/pages/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_asset_class_asset_class_component__ = __webpack_require__("../../../../../src/app/pages/asset-class/asset-class.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_asset_classes_asset_classes_component__ = __webpack_require__("../../../../../src/app/pages/asset-classes/asset-classes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_country_country_component__ = __webpack_require__("../../../../../src/app/pages/country/country.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_countries_countries_component__ = __webpack_require__("../../../../../src/app/pages/countries/countries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_firm_firm_component__ = __webpack_require__("../../../../../src/app/pages/firm/firm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_firms_firms_component__ = __webpack_require__("../../../../../src/app/pages/firms/firms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_issuer_issuer_component__ = __webpack_require__("../../../../../src/app/pages/issuer/issuer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_issuers_issuers_component__ = __webpack_require__("../../../../../src/app/pages/issuers/issuers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_product_product_component__ = __webpack_require__("../../../../../src/app/pages/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_products_products_component__ = __webpack_require__("../../../../../src/app/pages/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_fp_combo_fp_combo_component__ = __webpack_require__("../../../../../src/app/pages/fp-combo/fp-combo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_search_results_search_results_component__ = __webpack_require__("../../../../../src/app/pages/search-results/search-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__callback_callback_component__ = __webpack_require__("../../../../../src/app/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__pages_landing_landing_component__["a" /* LandingComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__pages_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'assetclasses', component: __WEBPACK_IMPORTED_MODULE_5__pages_asset_classes_asset_classes_component__["a" /* AssetClassesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'assetclasses/:id', component: __WEBPACK_IMPORTED_MODULE_4__pages_asset_class_asset_class_component__["a" /* AssetClassComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'countries', component: __WEBPACK_IMPORTED_MODULE_7__pages_countries_countries_component__["a" /* CountriesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'countries/:id', component: __WEBPACK_IMPORTED_MODULE_6__pages_country_country_component__["a" /* CountryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'firms', component: __WEBPACK_IMPORTED_MODULE_9__pages_firms_firms_component__["a" /* FirmsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'firms/:id', component: __WEBPACK_IMPORTED_MODULE_8__pages_firm_firm_component__["a" /* FirmComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'firms/:id/products/:ticker', component: __WEBPACK_IMPORTED_MODULE_14__pages_fp_combo_fp_combo_component__["a" /* FpComboComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'issuers', component: __WEBPACK_IMPORTED_MODULE_11__pages_issuers_issuers_component__["a" /* IssuersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'issuers/:id', component: __WEBPACK_IMPORTED_MODULE_10__pages_issuer_issuer_component__["a" /* IssuerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_13__pages_products_products_component__["a" /* ProductsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'products/:ticker', component: __WEBPACK_IMPORTED_MODULE_12__pages_product_product_component__["a" /* ProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'products/:ticker/firms/:id', component: __WEBPACK_IMPORTED_MODULE_14__pages_fp_combo_fp_combo_component__["a" /* FpComboComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'search/:term', component: __WEBPACK_IMPORTED_MODULE_15__pages_search_results_search_results_component__["a" /* SearchResultsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'callback', component: __WEBPACK_IMPORTED_MODULE_16__callback_callback_component__["a" /* CallbackComponent */] },
    { path: '**', redirectTo: 'home' }
];
//canActivate: [AuthGuard,AdminGuard]
//*ngIf="auth.loggedIn && auth.isAdmin"
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
        auth.handleAuthentication();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_firms_get_actions_by_firm_id_service__ = __webpack_require__("../../../../../src/app/services/firms/get-actions-by-firm-id.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_firms_get_all_firms_service__ = __webpack_require__("../../../../../src/app/services/firms/get-all-firms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_firms_get_firm_info_by_id_service__ = __webpack_require__("../../../../../src/app/services/firms/get-firm-info-by-id.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_firms_get_views_by_firm_id_service__ = __webpack_require__("../../../../../src/app/services/firms/get-views-by-firm-id.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_products_get_all_products_service__ = __webpack_require__("../../../../../src/app/services/products/get-all-products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_products_get_product_info_by_ticker_service__ = __webpack_require__("../../../../../src/app/services/products/get-product-info-by-ticker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_products_get_actions_by_ticker_service__ = __webpack_require__("../../../../../src/app/services/products/get-actions-by-ticker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_products_get_firms_by_ticker_service__ = __webpack_require__("../../../../../src/app/services/products/get-firms-by-ticker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_fp_combo_fp_combo_service__ = __webpack_require__("../../../../../src/app/services/fp-combo/fp-combo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_issuers_issuers_service__ = __webpack_require__("../../../../../src/app/services/issuers/issuers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_asset_classes_asset_classes_service__ = __webpack_require__("../../../../../src/app/services/asset-classes/asset-classes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_countries_countries_service__ = __webpack_require__("../../../../../src/app/services/countries/countries.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_search_get_search_results_service__ = __webpack_require__("../../../../../src/app/services/search/get-search-results.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__callback_callback_component__ = __webpack_require__("../../../../../src/app/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_page_title_page_title_component__ = __webpack_require__("../../../../../src/app/components/page-title/page-title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_dashboard_tables_dashboard_my_products_table_dashboard_my_products_table_component__ = __webpack_require__("../../../../../src/app/components/dashboard-tables/dashboard-my-products-table/dashboard-my-products-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_dashboard_tables_dashboard_views_by_firm_table_dashboard_views_by_firm_table_component__ = __webpack_require__("../../../../../src/app/components/dashboard-tables/dashboard-views-by-firm-table/dashboard-views-by-firm-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_products_table_products_table_component__ = __webpack_require__("../../../../../src/app/components/products-table/products-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_product_actions_table_product_actions_table_component__ = __webpack_require__("../../../../../src/app/components/product-actions-table/product-actions-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_firms_table_firms_table_component__ = __webpack_require__("../../../../../src/app/components/firms-table/firms-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_firm_actions_table_firm_actions_table_component__ = __webpack_require__("../../../../../src/app/components/firm-actions-table/firm-actions-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_firm_views_table_firm_views_table_component__ = __webpack_require__("../../../../../src/app/components/firm-views-table/firm-views-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_fp_combo_table_fp_combo_table_component__ = __webpack_require__("../../../../../src/app/components/fp-combo-table/fp-combo-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_issuer_table_issuer_table_component__ = __webpack_require__("../../../../../src/app/components/issuer-table/issuer-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_issuers_table_issuers_table_component__ = __webpack_require__("../../../../../src/app/components/issuers-table/issuers-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_asset_classes_table_asset_classes_table_component__ = __webpack_require__("../../../../../src/app/components/asset-classes-table/asset-classes-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_asset_class_table_asset_class_table_component__ = __webpack_require__("../../../../../src/app/components/asset-class-table/asset-class-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_countries_table_countries_table_component__ = __webpack_require__("../../../../../src/app/components/countries-table/countries-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_country_table_country_table_component__ = __webpack_require__("../../../../../src/app/components/country-table/country-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_landing_landing_component__ = __webpack_require__("../../../../../src/app/pages/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_asset_class_asset_class_component__ = __webpack_require__("../../../../../src/app/pages/asset-class/asset-class.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_asset_classes_asset_classes_component__ = __webpack_require__("../../../../../src/app/pages/asset-classes/asset-classes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_country_country_component__ = __webpack_require__("../../../../../src/app/pages/country/country.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_countries_countries_component__ = __webpack_require__("../../../../../src/app/pages/countries/countries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_firm_firm_component__ = __webpack_require__("../../../../../src/app/pages/firm/firm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_firms_firms_component__ = __webpack_require__("../../../../../src/app/pages/firms/firms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_issuer_issuer_component__ = __webpack_require__("../../../../../src/app/pages/issuer/issuer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_issuers_issuers_component__ = __webpack_require__("../../../../../src/app/pages/issuers/issuers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_product_product_component__ = __webpack_require__("../../../../../src/app/pages/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_products_products_component__ = __webpack_require__("../../../../../src/app/pages/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_product_firms_table_product_firms_table_component__ = __webpack_require__("../../../../../src/app/components/product-firms-table/product-firms-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_fp_combo_fp_combo_component__ = __webpack_require__("../../../../../src/app/pages/fp-combo/fp-combo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_search_results_search_results_component__ = __webpack_require__("../../../../../src/app/pages/search-results/search-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__components_search_results_table_search_results_table_component__ = __webpack_require__("../../../../../src/app/components/search-results-table/search-results-table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//modules







//api services
//firms




//products





//issuers

//asset classes

//countries

//search

//auth services



//components

//ui components


//tables














//page layouts
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_navbar_navbar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_40__pages_landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_41__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_dashboard_tables_dashboard_my_products_table_dashboard_my_products_table_component__["a" /* DashboardMyProductsTableComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_dashboard_tables_dashboard_views_by_firm_table_dashboard_views_by_firm_table_component__["a" /* DashboardViewsByFirmTableComponent */],
            __WEBPACK_IMPORTED_MODULE_46__pages_firm_firm_component__["a" /* FirmComponent */],
            __WEBPACK_IMPORTED_MODULE_47__pages_firms_firms_component__["a" /* FirmsComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_firm_actions_table_firm_actions_table_component__["a" /* FirmActionsTableComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_firm_views_table_firm_views_table_component__["a" /* FirmViewsTableComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_firms_table_firms_table_component__["a" /* FirmsTableComponent */],
            __WEBPACK_IMPORTED_MODULE_50__pages_product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_51__pages_products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_products_table_products_table_component__["a" /* ProductsTableComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_product_actions_table_product_actions_table_component__["a" /* ProductActionsTableComponent */],
            __WEBPACK_IMPORTED_MODULE_22__callback_callback_component__["a" /* CallbackComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_page_title_page_title_component__["a" /* PageTitleComponent */],
            __WEBPACK_IMPORTED_MODULE_48__pages_issuer_issuer_component__["a" /* IssuerComponent */],
            __WEBPACK_IMPORTED_MODULE_49__pages_issuers_issuers_component__["a" /* IssuersComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_issuer_table_issuer_table_component__["a" /* IssuerTableComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_issuers_table_issuers_table_component__["a" /* IssuersTableComponent */],
            __WEBPACK_IMPORTED_MODULE_42__pages_asset_class_asset_class_component__["a" /* AssetClassComponent */],
            __WEBPACK_IMPORTED_MODULE_43__pages_asset_classes_asset_classes_component__["a" /* AssetClassesComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_asset_classes_table_asset_classes_table_component__["a" /* AssetClassesTableComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_asset_class_table_asset_class_table_component__["a" /* AssetClassTableComponent */],
            __WEBPACK_IMPORTED_MODULE_44__pages_country_country_component__["a" /* CountryComponent */],
            __WEBPACK_IMPORTED_MODULE_45__pages_countries_countries_component__["a" /* CountriesComponent */],
            __WEBPACK_IMPORTED_MODULE_38__components_countries_table_countries_table_component__["a" /* CountriesTableComponent */],
            __WEBPACK_IMPORTED_MODULE_39__components_country_table_country_table_component__["a" /* CountryTableComponent */],
            __WEBPACK_IMPORTED_MODULE_52__components_product_firms_table_product_firms_table_component__["a" /* ProductFirmsTableComponent */],
            __WEBPACK_IMPORTED_MODULE_53__pages_fp_combo_fp_combo_component__["a" /* FpComboComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_fp_combo_table_fp_combo_table_component__["a" /* FpComboTableComponent */],
            __WEBPACK_IMPORTED_MODULE_54__pages_search_results_search_results_component__["a" /* SearchResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_55__components_search_results_table_search_results_table_component__["a" /* SearchResultsTableComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__material_material_module__["a" /* MaterialModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__services_fp_combo_fp_combo_service__["a" /* FpComboService */],
            __WEBPACK_IMPORTED_MODULE_7__services_firms_get_actions_by_firm_id_service__["a" /* GetActionsByFirmIdService */],
            __WEBPACK_IMPORTED_MODULE_8__services_firms_get_all_firms_service__["a" /* GetAllFirmsService */],
            __WEBPACK_IMPORTED_MODULE_9__services_firms_get_firm_info_by_id_service__["a" /* GetFirmInfoByIdService */],
            __WEBPACK_IMPORTED_MODULE_10__services_firms_get_views_by_firm_id_service__["a" /* GetViewsByFirmIdService */],
            __WEBPACK_IMPORTED_MODULE_11__services_products_get_all_products_service__["a" /* GetAllProductsService */],
            __WEBPACK_IMPORTED_MODULE_12__services_products_get_product_info_by_ticker_service__["a" /* GetProductInfoByTickerService */],
            __WEBPACK_IMPORTED_MODULE_14__services_products_get_firms_by_ticker_service__["a" /* GetFirmsByTickerService */],
            __WEBPACK_IMPORTED_MODULE_13__services_products_get_actions_by_ticker_service__["a" /* GetActionsByTickerService */],
            __WEBPACK_IMPORTED_MODULE_19__services_search_get_search_results_service__["a" /* GetSearchResultsService */],
            __WEBPACK_IMPORTED_MODULE_17__services_asset_classes_asset_classes_service__["a" /* AssetClassesService */],
            __WEBPACK_IMPORTED_MODULE_18__services_countries_countries_service__["a" /* CountriesService */],
            __WEBPACK_IMPORTED_MODULE_16__services_issuers_issuers_service__["a" /* IssuersService */],
            __WEBPACK_IMPORTED_MODULE_20__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_21__auth_auth_guard_service__["a" /* AuthGuardService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['/home']);
            return false;
        }
        return true;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth0_variables__ = __webpack_require__("../../../../../src/app/auth/auth0-variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_lock__ = __webpack_require__("../../../../auth0-lock/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_lock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_auth0_lock__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.options = {
            oidcConformant: true,
            autoclose: true,
            auth: {
                redirectUrl: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].callbackURL,
                responseType: 'token id_token',
                audience: "https://" + __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].domain + "/userinfo",
                params: {
                    scope: 'openid'
                }
            },
            languageDictionary: {
                title: 'Authenticate'
            },
            theme: {
                primaryColor: '#EF6430',
            },
            allowShowPassword: true,
            allowForgotPassword: true,
            allowedConnections: ['Username-Password-Authentication']
        };
        this.lock = new __WEBPACK_IMPORTED_MODULE_4_auth0_lock___default.a(__WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].clientID, __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].domain, this.options);
    }
    AuthService.prototype.login = function () {
        this.lock.show({
            initialScreen: 'login'
        });
    };
    AuthService.prototype.signup = function () {
        this.lock.show({
            initialScreen: 'signUp'
        });
    };
    // Call this method in app.component.ts
    // if using path-based routing
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.lock.on('authenticated', function (authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                _this.setSession(authResult);
                _this.router.navigate(['/dashboard']);
            }
        });
        this.lock.on('authorization_error', function (err) {
            alert("Error: " + err.error + ". Check the console for further details.");
        });
    };
    /*
    // Call this method in app.component.ts
    // if using hash-based routing
    public handleAuthenticationWithHash(): void {
      this
        .router
        .events
        .filter(event => event instanceof NavigationStart)
        .filter((event: NavigationStart) => (/access_token|id_token|error/).test(event.url))
        .subscribe(() => {
          this.lock.resumeAuth(window.location.hash, (err, authResult) => {
            if (err) {
              this.router.navigate(['/']);
              console.log(err);
              alert(`Error: ${err.error}. Check the console for further details.`);
              return;
            }
            this.setSession(authResult);
            this.router.navigate(['/']);
          });
      });
    }
    */
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
/*  Redirect Logic  */
/*

export class AuthService {
  ...
  login(redirect?: string) {
    // Set redirect after login
    const _redirect = redirect ? redirect : this.router.url;
    localStorage.setItem('authRedirect', _redirect);
    // Auth0 authorize request
    ...
  }

  handleAuth() {
    // When Auth0 hash parsed, get profile
    this._auth0.parseHash((err, authResult) => {
        ...
      } else if (err) {
        this._clearRedirect();
        this.router.navigate(['/']);
        console.error(`Error authenticating: ${err.error}`);
      }
    });
  }

  private _getProfile(authResult) {
    // Use access token to retrieve user's profile and set session
    this._auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      if (profile) {
        ...
        this.router.navigate([localStorage.getItem('authRedirect') || '/']);
        this._clearRedirect();
      } else if (err) {
      ...
    });
  }

  ...

  private _clearRedirect() {
    // Remove redirect from localStorage
    localStorage.removeItem('authRedirect');
  }

  */ 
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth0-variables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_CONFIG; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

var AUTH_CONFIG = {
    clientID: 'bDXcVu8YVfQtC3YvmskMLhKOwmTe8b5K',
    domain: 'etfg.auth0.com',
    callbackURL: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].baseUrl + "/callback"
};
//# sourceMappingURL=auth0-variables.js.map

/***/ }),

/***/ "../../../../../src/app/callback/callback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\" style=\"position: absolute; top: 48vh; left: 50vw; margin-right: -50%;\ntransform: translate(-50%, -50%);\">\n  <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\n  <br><br>\n  <div>ETFG</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CallbackComponent = (function () {
    function CallbackComponent() {
    }
    CallbackComponent.prototype.ngOnInit = function () { };
    return CallbackComponent;
}());
CallbackComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'callback',
        template: __webpack_require__("../../../../../src/app/callback/callback.component.html"),
        styles: [__webpack_require__("../../../../../src/app/callback/callback.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CallbackComponent);

//# sourceMappingURL=callback.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/asset-class-table/asset-class-table.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  asset-class-table works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/asset-class-table/asset-class-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/asset-class-table/asset-class-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetClassTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssetClassTableComponent = (function () {
    function AssetClassTableComponent() {
    }
    AssetClassTableComponent.prototype.ngOnInit = function () {
    };
    return AssetClassTableComponent;
}());
AssetClassTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'asset-class-table',
        template: __webpack_require__("../../../../../src/app/components/asset-class-table/asset-class-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/asset-class-table/asset-class-table.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AssetClassTableComponent);

//# sourceMappingURL=asset-class-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/asset-classes-table/asset-classes-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z4\">\n  <div class=\"header\">\n      <h6>Asset Classes</h6>   \n  </div>\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> # </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.rowNumber}}</mat-cell>\n    </ng-container>\n\n    <!-- Ticker Column -->\n    <ng-container matColumnDef=\"ticker\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Ticker </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/products/', row.ticker]\">{{row.ticker}}</a></mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/products/', row.ticker]\">{{row.name}}</a></mat-cell>\n    </ng-container>\n\n    <!-- Issuer Column -->\n    <ng-container matColumnDef=\"issuer\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Issuer </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"><a href=\"\">{{row.issuer_id}}</a></mat-cell>\n    </ng-container>\n\n    <!-- ViewCount Column -->\n    <ng-container matColumnDef=\"views\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Views </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.view_count}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/asset-classes-table/asset-classes-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  min-height: 2em;\n  line-height: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: inherit;\n    margin: 0px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 34em; }\n\n.mat-header-cell .mat-sort-header-sorted {\n  color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/asset-classes-table/asset-classes-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetClassesTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssetClassesTableComponent = (function () {
    function AssetClassesTableComponent() {
    }
    AssetClassesTableComponent.prototype.ngOnInit = function () { };
    return AssetClassesTableComponent;
}());
AssetClassesTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'asset-classes-table',
        template: __webpack_require__("../../../../../src/app/components/asset-classes-table/asset-classes-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/asset-classes-table/asset-classes-table.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AssetClassesTableComponent);

//# sourceMappingURL=asset-classes-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/countries-table/countries-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z4\">\n  <div class=\"header\">\n      <h6>Countries</h6>   \n  </div>\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> # </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.rowNumber}}</mat-cell>\n    </ng-container>\n\n    <!-- Ticker Column -->\n    <ng-container matColumnDef=\"ticker\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Ticker </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/products/', row.ticker]\">{{row.ticker}}</a></mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/products/', row.ticker]\">{{row.name}}</a></mat-cell>\n    </ng-container>\n\n    <!-- Issuer Column -->\n    <ng-container matColumnDef=\"issuer\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Issuer </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"><a href=\"\">{{row.issuer_id}}</a></mat-cell>\n    </ng-container>\n\n    <!-- ViewCount Column -->\n    <ng-container matColumnDef=\"views\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Views </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.view_count}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/countries-table/countries-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  min-height: 2em;\n  line-height: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: inherit;\n    margin: 0px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 34em; }\n\n.mat-header-cell .mat-sort-header-sorted {\n  color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/countries-table/countries-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountriesTableComponent; });
/* unused harmony export CountriesDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_countries_countries_service__ = __webpack_require__("../../../../../src/app/services/countries/countries.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountriesTableComponent = (function () {
    function CountriesTableComponent(countriesService) {
        this.countriesService = countriesService;
        this.displayedColumns = ['id', 'name', 'views'];
    }
    CountriesTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new CountriesDataSource(this.countriesService);
    };
    CountriesTableComponent.prototype.filterChange = function (text) {
        this.dataSource.changeFilter(text);
    };
    return CountriesTableComponent;
}());
CountriesTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'countries-table',
        template: __webpack_require__("../../../../../src/app/components/countries-table/countries-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/countries-table/countries-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_countries_countries_service__["a" /* CountriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_countries_countries_service__["a" /* CountriesService */]) === "function" && _a || Object])
], CountriesTableComponent);

var CountriesDataSource = (function (_super) {
    __extends(CountriesDataSource, _super);
    function CountriesDataSource(countriesService) {
        var _this = _super.call(this) || this;
        _this.countriesService = countriesService;
        _this.filterChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]('');
        return _this;
    }
    CountriesDataSource.prototype.changeFilter = function (text) {
        this.filterChange.next(text.toUpperCase());
    };
    CountriesDataSource.prototype.connect = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (subscriber) {
            _this.countriesService.getCountries().subscribe(function (response) {
                var data = response.json();
                if (data && data.countries) {
                    data = data.countries;
                }
                else if (data.data && data.data.countries) {
                    data = data.data.countries;
                }
                var count = 1;
                data.map(function (row) {
                    row.rowNumber = (count + '.');
                    count++;
                    return row;
                });
                subscriber.next(data);
                _this.filterChange.debounceTime(500).distinctUntilChanged().subscribe(function (filter) {
                    if (filter === '' || !filter) {
                        return subscriber.next(data);
                    }
                    var copy = data.slice();
                    copy = copy.filter(function (row) {
                        if (!row.name)
                            return false;
                        var name = row.name.toUpperCase();
                        return name.indexOf(filter) > -1;
                    });
                    subscriber.next(copy);
                });
            });
        });
    };
    CountriesDataSource.prototype.disconnect = function () { };
    return CountriesDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["a" /* DataSource */]));

var _a;
//# sourceMappingURL=countries-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/country-table/country-table.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  country-table works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/country-table/country-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/country-table/country-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountryTableComponent = (function () {
    function CountryTableComponent() {
    }
    CountryTableComponent.prototype.ngOnInit = function () {
    };
    return CountryTableComponent;
}());
CountryTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'country-table',
        template: __webpack_require__("../../../../../src/app/components/country-table/country-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/country-table/country-table.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CountryTableComponent);

//# sourceMappingURL=country-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard-tables/dashboard-my-products-table/dashboard-my-products-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h6>Top Products</h6>\n  <a [routerLink]=\"['/products']\"><h6 class=\"float-right\">Show All</h6></a>\n</div>\n<mat-table [dataSource]=\"dataSource\">\n  <!-- ID Column -->\n  <ng-container matColumnDef=\"id\">\n    <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n    <mat-cell *matCellDef=\"let row\">{{row.rowNumber}}</mat-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"ticker\">\n    <mat-header-cell *matHeaderCellDef> Ticker </mat-header-cell>\n    <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/products/', row.ticker]\">{{row.ticker}}</a></mat-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n    <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/products/', row.ticker]\">{{row.name}}</a></mat-cell>\n  </ng-container>\n\n  <!-- View Count Column -->\n  <ng-container matColumnDef=\"views\">\n    <mat-header-cell *matHeaderCellDef> Views </mat-header-cell>\n    <mat-cell *matCellDef=\"let row\"> {{row.view_count}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n</mat-table>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard-tables/dashboard-my-products-table/dashboard-my-products-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.header {\n  min-height: 2em;\n  line-height: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: inherit;\n    margin: 0px; }\n\n.mat-form-field {\n  font-size: 14px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-left: 32px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.col-md-6 {\n  margin-bottom: 5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard-tables/dashboard-my-products-table/dashboard-my-products-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardMyProductsTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_sources_products__ = __webpack_require__("../../../../../src/app/data-sources/products.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_get_all_products_service__ = __webpack_require__("../../../../../src/app/services/products/get-all-products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardMyProductsTableComponent = (function () {
    //constructor(private service: GetAllProductsService, private onCompleted: any) {}
    function DashboardMyProductsTableComponent(service) {
        this.service = service;
        this.displayedColumns = ['id', 'ticker', 'name', 'views'];
    }
    DashboardMyProductsTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__data_sources_products__["a" /* ProductsSource */](this.service);
        //this.dataSource = new ProductsSource(this.service, this.onCompleted);
    };
    DashboardMyProductsTableComponent.prototype.filterChange = function (text) {
        this.dataSource.changeFilter(text);
    };
    return DashboardMyProductsTableComponent;
}());
DashboardMyProductsTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dashboard-my-products-table',
        template: __webpack_require__("../../../../../src/app/components/dashboard-tables/dashboard-my-products-table/dashboard-my-products-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard-tables/dashboard-my-products-table/dashboard-my-products-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_products_get_all_products_service__["a" /* GetAllProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_products_get_all_products_service__["a" /* GetAllProductsService */]) === "function" && _a || Object])
], DashboardMyProductsTableComponent);

var _a;
//# sourceMappingURL=dashboard-my-products-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard-tables/dashboard-views-by-firm-table/dashboard-views-by-firm-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"header\">\n    <h6>Views By Firm</h6>\n    <a [routerLink]=\"['/firms']\"><h6 class=\"float-right\">Show All</h6></a>   \n  </div>\n  <mat-table [dataSource]=\"dataSource\">\n  \n    <!-- Number Column -->\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.rowNumber}} </mat-cell>\n    </ng-container>\n  \n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/firms/', row.id]\">{{row.name}}</a></mat-cell>\n    </ng-container>\n  \n    <!-- Views Column -->\n    <ng-container matColumnDef=\"views\">\n      <mat-header-cell *matHeaderCellDef> Views </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.view_count}} </mat-cell>\n    </ng-container>\n  \n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  \n  </mat-table>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard-tables/dashboard-views-by-firm-table/dashboard-views-by-firm-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.header {\n  min-height: 2em;\n  line-height: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: inherit;\n    margin: 0px; }\n\n.mat-form-field {\n  font-size: 14px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-left: 32px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.col-md-6 {\n  margin-bottom: 5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard-tables/dashboard-views-by-firm-table/dashboard-views-by-firm-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardViewsByFirmTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_sources_firms__ = __webpack_require__("../../../../../src/app/data-sources/firms.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firms_get_all_firms_service__ = __webpack_require__("../../../../../src/app/services/firms/get-all-firms.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardViewsByFirmTableComponent = (function () {
    function DashboardViewsByFirmTableComponent(service) {
        this.service = service;
        this.isLoaded = false;
        this.displayedColumns = ['id', 'name', 'views'];
    }
    DashboardViewsByFirmTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__data_sources_firms__["a" /* FirmsSource */](this.service);
        setTimeout(function () { _this.isLoaded = true; }, 1000);
    };
    return DashboardViewsByFirmTableComponent;
}());
DashboardViewsByFirmTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dashboard-views-by-firm-table',
        template: __webpack_require__("../../../../../src/app/components/dashboard-tables/dashboard-views-by-firm-table/dashboard-views-by-firm-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard-tables/dashboard-views-by-firm-table/dashboard-views-by-firm-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_firms_get_all_firms_service__["a" /* GetAllFirmsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_firms_get_all_firms_service__["a" /* GetAllFirmsService */]) === "function" && _a || Object])
], DashboardViewsByFirmTableComponent);

var _a;
//# sourceMappingURL=dashboard-views-by-firm-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/firm-actions-table/firm-actions-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z4\">\n  <div class=\"header\">\n    <h6>Views By Date</h6>   \n  </div>\n  <mat-table [dataSource]=\"dataSource\">\n      \n    <!-- Row Number Column -->\n    <ng-container matColumnDef=\"num\">\n      <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.rowNumber}} </mat-cell>\n    </ng-container>\n    \n    <!-- Date Column -->\n    <ng-container matColumnDef=\"date\">\n      <mat-header-cell *matHeaderCellDef> Date/Time\t </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.date}} </mat-cell>\n    </ng-container>\n\n    <!-- Location Column -->\n    <ng-container matColumnDef=\"location\">\n      <mat-header-cell *matHeaderCellDef> Location </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <span *ngIf=\"row.address\">{{row.address}}</span><br>\n        <span *ngIf=\"row.city\">{{row.city}},</span><br>\n        <span *ngIf=\"row.state\">{{row.state}}</span>\n        <span *ngIf=\"row.zip\">{{row.zip}}</span><br>\n        <span *ngIf=\"row.country\">{{row.country}}<br></span>\n      </mat-cell>\n    </ng-container>\n\n    <!-- Type Column -->\n    <ng-container matColumnDef=\"type\">\n      <mat-header-cell *matHeaderCellDef> Action Type </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.type}} </mat-cell>\n    </ng-container> -->\n\n    <!-- Portfolio Column -->\n    <ng-container matColumnDef=\"portfolio\">\n        <mat-header-cell *matHeaderCellDef class=\"fixed-width\"> Portfolio </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"fixed-width\">\n          <span *ngFor=\"let item of row.portfolio\">\n            <a href='/products/{{item.ticker}}'>{{ item.ticker }}</a>: {{ item.percentage }}\n          </span>\n        </mat-cell>\n      </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n  </mat-table>\n</div>\n  \n    "

/***/ }),

/***/ "../../../../../src/app/components/firm-actions-table/firm-actions-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  height: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  padding-left: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: 40px;\n    margin: 0px; }\n\n.mat-form-field {\n  font-size: 14px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-left: 32px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 34em; }\n\n.fixed-width {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100px;\n          flex: 0 0 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/firm-actions-table/firm-actions-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmActionsTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_sources_firm_actions__ = __webpack_require__("../../../../../src/app/data-sources/firm-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firms_get_actions_by_firm_id_service__ = __webpack_require__("../../../../../src/app/services/firms/get-actions-by-firm-id.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirmActionsTableComponent = (function () {
    function FirmActionsTableComponent(service) {
        this.service = service;
        this.isLoaded = false;
        this.displayedColumns = ['num', 'date', 'location', 'type', 'portfolio'];
    }
    FirmActionsTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__data_sources_firm_actions__["a" /* FirmActionsSource */](this.firmId, this.service);
        setTimeout(function () { _this.isLoaded = true; }, 1000);
    };
    return FirmActionsTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], FirmActionsTableComponent.prototype, "firmId", void 0);
FirmActionsTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'firm-actions-table',
        template: __webpack_require__("../../../../../src/app/components/firm-actions-table/firm-actions-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/firm-actions-table/firm-actions-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_firms_get_actions_by_firm_id_service__["a" /* GetActionsByFirmIdService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_firms_get_actions_by_firm_id_service__["a" /* GetActionsByFirmIdService */]) === "function" && _a || Object])
], FirmActionsTableComponent);

var _a;
//# sourceMappingURL=firm-actions-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/firm-views-table/firm-views-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z4 raise\">\n    <div class=\"header\">\n        <h6> Viewed Products </h6>\n    </div>\n    <mat-table [dataSource]=\"dataSource\">\n\n        <!-- Row Number Column -->\n        <ng-container matColumnDef=\"num\">\n        <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.rowNumber}} </mat-cell>\n        </ng-container>\n\n        <!-- Ticker Column -->\n        <ng-container matColumnDef=\"ticker\">\n        <mat-header-cell *matHeaderCellDef> Ticker </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/products/', row.ticker]\">{{row.ticker}}</a></mat-cell>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/products/', row.ticker]\">{{row.name}}</a></mat-cell>\n        </ng-container>\n\n        <!--Issuer Column -->\n        <ng-container matColumnDef=\"issuer\">\n        <mat-header-cell *matHeaderCellDef> Issuer </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.issuer_name}} </mat-cell>\n        </ng-container>\n\n        <!-- Views Column -->\n        <ng-container matColumnDef=\"views\">\n        <mat-header-cell *matHeaderCellDef> Views </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['./products/', row.ticker]\">{{row.view_count}}</a></mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n</div>\n      \n          "

/***/ }),

/***/ "../../../../../src/app/components/firm-views-table/firm-views-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  height: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  padding-left: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: 40px;\n    margin: 0px; }\n\n.mat-form-field {\n  font-size: 14px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-left: 32px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 34em; }\n\n.fixed-width {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 90px;\n          flex: 0 0 90px; }\n\n.col-md-6 {\n  margin-bottom: 5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/firm-views-table/firm-views-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmViewsTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firms_get_views_by_firm_id_service__ = __webpack_require__("../../../../../src/app/services/firms/get-views-by-firm-id.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_sources_firm_views__ = __webpack_require__("../../../../../src/app/data-sources/firm-views.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirmViewsTableComponent = (function () {
    function FirmViewsTableComponent(service) {
        this.service = service;
        this.isLoaded = false;
        this.displayedColumns = ['num', 'ticker', 'name', 'issuer', 'views'];
    }
    FirmViewsTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__data_sources_firm_views__["a" /* FirmViewsSource */](this.firmId, this.service);
        setTimeout(function () { _this.isLoaded = true; }, 1000);
    };
    return FirmViewsTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], FirmViewsTableComponent.prototype, "firmId", void 0);
FirmViewsTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'firm-views-table',
        template: __webpack_require__("../../../../../src/app/components/firm-views-table/firm-views-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/firm-views-table/firm-views-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firms_get_views_by_firm_id_service__["a" /* GetViewsByFirmIdService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_firms_get_views_by_firm_id_service__["a" /* GetViewsByFirmIdService */]) === "function" && _a || Object])
], FirmViewsTableComponent);

var _a;
//# sourceMappingURL=firm-views-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/firms-table/firms-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isLoaded\">\n  <div class=\"text-center\" style=\"position: absolute; top: 20vh; left: 50vw; margin-right: -50%;\n  transform: translate(-50%, -50%);\">\n    <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\n  </div>\n</div>\n<div *ngIf=\"isLoaded\">\n  <div class=\"header\">\n    <h6>Firms</h6>   \n  </div>\n  <mat-table [dataSource]=\"dataSource\">\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.rowNumber}} </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/firms/', row.id]\">{{row.name}}</a></mat-cell>\n    </ng-container>\n\n    <!-- Users Column -->\n    <ng-container matColumnDef=\"users\">\n      <mat-header-cell *matHeaderCellDef> Users </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.users}} </mat-cell>\n    </ng-container>\n\n    <!-- Views Column -->\n    <ng-container matColumnDef=\"views\">\n      <mat-header-cell *matHeaderCellDef> Views </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.view_count}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n  </mat-table>\n</div>\n  \n"

/***/ }),

/***/ "../../../../../src/app/components/firms-table/firms-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.header {\n  min-height: 2em;\n  line-height: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: inherit;\n    margin: 0px; }\n\n.mat-form-field {\n  font-size: 14px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-left: 32px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.col-md-6 {\n  margin-bottom: 5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/firms-table/firms-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmsTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_sources_firms__ = __webpack_require__("../../../../../src/app/data-sources/firms.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firms_get_all_firms_service__ = __webpack_require__("../../../../../src/app/services/firms/get-all-firms.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirmsTableComponent = (function () {
    function FirmsTableComponent(service) {
        this.service = service;
        this.isLoaded = false;
        this.displayedColumns = ['id', 'name', 'users', 'views'];
    }
    FirmsTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__data_sources_firms__["a" /* FirmsSource */](this.service);
        setTimeout(function () { _this.isLoaded = true; }, 1000);
    };
    return FirmsTableComponent;
}());
FirmsTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'firms-table',
        template: __webpack_require__("../../../../../src/app/components/firms-table/firms-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/firms-table/firms-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_firms_get_all_firms_service__["a" /* GetAllFirmsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_firms_get_all_firms_service__["a" /* GetAllFirmsService */]) === "function" && _a || Object])
], FirmsTableComponent);

var _a;
//# sourceMappingURL=firms-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/fp-combo-table/fp-combo-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z4\">\n  <div class=\"header\">\n    <h6>Views By Date</h6>   \n  </div>\n  <mat-table [dataSource]=\"dataSource\">\n      \n    <!-- Row Number Column -->\n    <ng-container matColumnDef=\"num\">\n      <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.rowNumber}} </mat-cell>\n    </ng-container>\n    \n    <!-- Date Column -->\n    <ng-container matColumnDef=\"date\">\n      <mat-header-cell *matHeaderCellDef> Date/Time\t </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.date}} </mat-cell>\n    </ng-container>\n\n     <!-- Location Column -->\n    <ng-container matColumnDef=\"location\">\n      <mat-header-cell *matHeaderCellDef> Location </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <span *ngIf=\"row.address\">{{row.address}}</span><br>\n        <span *ngIf=\"row.city\">{{row.city}},</span><br>\n        <span *ngIf=\"row.state\">{{row.state}}</span>\n        <span *ngIf=\"row.zip\">{{row.zip}}</span><br>\n        <span *ngIf=\"row.country\">{{row.country}}<br></span>\n      </mat-cell>\n    </ng-container>\n\n    <!-- Type Column -->\n    <ng-container matColumnDef=\"type\">\n      <mat-header-cell *matHeaderCellDef> Action Type </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.type}} </mat-cell>\n    </ng-container> -->\n\n    <!-- Portfolio Column -->\n    <ng-container matColumnDef=\"portfolio\">\n      <mat-header-cell *matHeaderCellDef class=\"fixed-width\"> Portfolio </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" class=\"fixed-width\">\n        <span *ngFor=\"let item of row.portfolio\">\n          <a href='/products/{{item.ticker}}'>{{ item.ticker }}</a>: {{ item.percentage }}\n        </span>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n  </mat-table>\n</div>\n    "

/***/ }),

/***/ "../../../../../src/app/components/fp-combo-table/fp-combo-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  height: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  padding-left: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: 40px;\n    margin: 0px; }\n\n.mat-form-field {\n  font-size: 14px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-left: 32px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 34em; }\n\n.fixed-width {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100px;\n          flex: 0 0 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/fp-combo-table/fp-combo-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FpComboTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fp_combo_fp_combo_service__ = __webpack_require__("../../../../../src/app/services/fp-combo/fp-combo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_sources_fp_combo__ = __webpack_require__("../../../../../src/app/data-sources/fp-combo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FpComboTableComponent = (function () {
    function FpComboTableComponent(service) {
        this.service = service;
        this.isLoaded = false;
        this.displayedColumns = ['num', 'date', 'location', 'type', 'portfolio'];
    }
    FpComboTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__data_sources_fp_combo__["a" /* FpComboSource */](this.service, this.firmId, this.ticker);
        setTimeout(function () { _this.isLoaded = true; }, 1000);
    };
    return FpComboTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], FpComboTableComponent.prototype, "firmId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], FpComboTableComponent.prototype, "ticker", void 0);
FpComboTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'fp-combo-table',
        template: __webpack_require__("../../../../../src/app/components/fp-combo-table/fp-combo-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/fp-combo-table/fp-combo-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_fp_combo_fp_combo_service__["a" /* FpComboService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_fp_combo_fp_combo_service__["a" /* FpComboService */]) === "function" && _a || Object])
], FpComboTableComponent);

var _a;
//# sourceMappingURL=fp-combo-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/issuer-table/issuer-table.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  issuer-table works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/issuer-table/issuer-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/issuer-table/issuer-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuerTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IssuerTableComponent = (function () {
    function IssuerTableComponent() {
    }
    IssuerTableComponent.prototype.ngOnInit = function () {
    };
    return IssuerTableComponent;
}());
IssuerTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'issuer-table',
        template: __webpack_require__("../../../../../src/app/components/issuer-table/issuer-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/issuer-table/issuer-table.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], IssuerTableComponent);

//# sourceMappingURL=issuer-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/issuers-table/issuers-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z4\">\n  <div class=\"header\">\n      <h6>Issuers</h6>   \n  </div>\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> # </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.rowNumber}}</mat-cell>\n    </ng-container>\n\n    <!-- Ticker Column -->\n    <ng-container matColumnDef=\"ticker\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Ticker </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/products/', row.ticker]\">{{row.ticker}}</a></mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/products/', row.ticker]\">{{row.name}}</a></mat-cell>\n    </ng-container>\n\n    <!-- Issuer Column -->\n    <ng-container matColumnDef=\"issuer\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Issuer </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"><a href=\"\">{{row.issuer_id}}</a></mat-cell>\n    </ng-container>\n\n    <!-- ViewCount Column -->\n    <ng-container matColumnDef=\"views\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Views </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.view_count}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/issuers-table/issuers-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  min-height: 2em;\n  line-height: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: inherit;\n    margin: 0px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 34em; }\n\n.mat-header-cell .mat-sort-header-sorted {\n  color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/issuers-table/issuers-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuersTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IssuersTableComponent = (function () {
    function IssuersTableComponent() {
    }
    IssuersTableComponent.prototype.ngOnInit = function () {
    };
    return IssuersTableComponent;
}());
IssuersTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'issuers-table',
        template: __webpack_require__("../../../../../src/app/components/issuers-table/issuers-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/issuers-table/issuers-table.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], IssuersTableComponent);

//# sourceMappingURL=issuers-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <button mat-mini-fab color=\"warn\" *ngIf=\"auth.isAuthenticated()\" class=\"navbar-toggler navbar-toggler-right float-right orange-background\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <div *ngIf=\"!auth.isAuthenticated()\">\n    <a class=\"navbar-brand\" href=\"/\">\n      <img src=\"../../../assets/logos/logo.png\" alt=\"ETF Global\">                  \n      <br>\n      <span class=\"logoText\">Business Intelligence Beta</span>\n    </a>\n  </div>\n  <div *ngIf=\"auth.isAuthenticated()\">                \n    <a class=\"navbar-brand\" href=\"/dashboard\">\n      <img src=\"../../../assets/logos/logo.png\" alt=\"ETF Global logo\">                  \n      <br>\n      <span class=\"logoText\">Business Intelligence Beta</span>\n    </a>\n  </div>\n  <div *ngIf=\"auth.isAuthenticated()\" class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n      </li>\n      <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n        <a class=\"nav-link\" [routerLink]=\"['/products']\">Products</a>\n      </li>\n      <!--\n      <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n        <a class=\"nav-link\" [routerLink]=\"['/assetclasses']\">Asset Classes</a>\n      </li>\n      <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n        <a class=\"nav-link\" [routerLink]=\"['/issuers']\">Issuers</a>\n      </li> -->\n      <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n        <a class=\"nav-link\" [routerLink]=\"['/firms']\">Firms</a>\n      </li>\n      <!--\n      <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n        <a class=\"nav-link\" [routerLink]=\"['/countries']\">Countries</a>\n      </li>\n    -->\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0 float-left\" [formGroup]=\"searchForm\" (ngSubmit)=\"handleSearch($event)\">\n      <input formControlName=\"term\" class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Enter a ticker...\">\n      <button class=\"btn btn-primary fa fa-search orange-background\" type=\"submit\"></button>\n    </form>\n    <div class=\"button-row float-right\">\n      <button mat-raised-button class=\"auth-button\" *ngIf=\"auth.isAuthenticated()\" (click)=\"auth.logout()\">Log Out</button>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  cursor: pointer;\n  border: none !important;\n  outline: none !important; }\n\nform input {\n  border-radius: 2px;\n  padding-left: 5px !important;\n  font-family: inherit;\n  font-weight: lighter; }\n  form input::-webkit-input-placeholder {\n    color: #aaa; }\n  form input:-ms-input-placeholder {\n    color: #aaa; }\n  form input::placeholder {\n    color: #aaa; }\n\nform button {\n  height: 36px;\n  margin-top: -2px;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n  form button:hover {\n    box-shadow: 0px 0px 5px 1px #777 !important; }\n\na.navbar-brand {\n  margin-left: 2em; }\n\na.navbar-brand > img {\n  height: 1.5em; }\n\n.logoText {\n  font-size: .8em; }\n\nnav {\n  position: fixed;\n  width: 100vw;\n  z-index: 1000;\n  padding-right: 20px; }\n\n.button-row.float-right {\n  margin-left: auto !important; }\n\nnav.navbar.navbar-toggleable-md.navbar-light.bg-faded {\n  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75); }\n\n@media (min-width: 991px) {\n  form.form-inline.my-2.my-lg-0.ng-untouched.ng-pristine.ng-valid {\n    padding-right: 4em; } }\n\n@media (max-width: 991px) {\n  .navbar-toggleable-md .navbar-nav .dropdown-menu {\n    position: absolute;\n    float: none; }\n  div#navbarSupportedContent {\n    margin-top: 1.3em; }\n  a.navbar-brand {\n    width: 50%; }\n  button.navbar-toggler.navbar-toggler-right.float-right.mat-mini-fab.mat-warn {\n    float: right;\n    position: absolute;\n    top: 1em;\n    right: 2em;\n    color: white; }\n  form.form-inline.my-2.my-lg-0.float-right.ng-untouched.ng-pristine.ng-valid {\n    position: relative;\n    float: left !important;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap; }\n  button.btn.btn-primary.fa.fa-search {\n    margin-left: .5em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavBarComponent = (function () {
    function NavBarComponent(fb, auth, router) {
        var _this = this;
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.searchForm = this.fb.group({
            term: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]
        });
        this.handleSearch = function (event) {
            //dummy search
            //this.router.navigateByUrl(`/products/${this.searchForm.controls.term.value}`);
            //real search
            _this.router.navigateByUrl("/search/" + _this.searchForm.controls.term.value);
            _this.searchForm.reset();
            //this is a hack, angular should reload page content on route change...
            location.reload();
        };
        auth.handleAuthentication();
    }
    NavBarComponent.prototype.ngOnInit = function () { };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NavBarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page-title/page-title.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row bg-primary\">\n  <div class=\"col-md-12 orange-background\">\n    <h1 style=\"white-space: pre;\" class=\"text-center title\">{{title}}</h1>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/page-title/page-title.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row.bg-primary {\n  margin-bottom: 3.125em; }\n\n.text-center.title {\n  color: #fff;\n  padding-top: 1.2em;\n  padding-bottom: 1.2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-title/page-title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageTitleComponent = (function () {
    function PageTitleComponent() {
    }
    PageTitleComponent.prototype.ngOnInit = function () {
        if (this.title) {
            document.title = "ETFG | " + this.title;
        }
    };
    return PageTitleComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], PageTitleComponent.prototype, "title", void 0);
PageTitleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'page-title',
        template: __webpack_require__("../../../../../src/app/components/page-title/page-title.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page-title/page-title.component.scss")],
    })
], PageTitleComponent);

//# sourceMappingURL=page-title.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/product-actions-table/product-actions-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z4 raise\">\n  <div class=\"header\">\n    <h6>Views By Date</h6>   \n  </div>\n  <mat-table [dataSource]=\"dataSource\">\n      \n    <!-- Row Number Column -->\n    <ng-container matColumnDef=\"num\">\n      <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.rowNumber}} </mat-cell>\n    </ng-container>\n    \n    <!-- Date Column -->\n    <ng-container matColumnDef=\"date\">\n      <mat-header-cell *matHeaderCellDef> Date/Time\t </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.date}} </mat-cell>\n    </ng-container>\n\n    <!-- Firm Column -->\n    <ng-container matColumnDef=\"firm\">\n      <mat-header-cell *matHeaderCellDef> Firm </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/firms/', row.firmId]\">{{row.firm}}</a></mat-cell>\n    </ng-container>\n\n    <!-- Location Column -->\n    <ng-container matColumnDef=\"location\">\n      <mat-header-cell *matHeaderCellDef> Location </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <span *ngIf=\"row.address\">{{row.address}}</span><br>\n        <span *ngIf=\"row.city\">{{row.city}},</span><br>\n        <span *ngIf=\"row.state\">{{row.state}}</span>\n        <span *ngIf=\"row.zip\">{{row.zip}}</span><br>\n        <span *ngIf=\"row.country\">{{row.country}}<br></span>\n      </mat-cell>\n    </ng-container>\n\n    <!-- Type Column -->\n    <ng-container matColumnDef=\"type\">\n      <mat-header-cell *matHeaderCellDef> Action Type </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.type}} </mat-cell>\n    </ng-container> -->\n\n    <!-- Portfolio Column -->\n    <ng-container matColumnDef=\"portfolio\">\n      <mat-header-cell *matHeaderCellDef class=\"fixed-width\"> Portfolio </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" class=\"fixed-width\">\n        <span *ngFor=\"let item of row.portfolio\">\n          <a href='/products/{{item.ticker}}'>{{ item.ticker }}</a>: {{ item.percentage }}\n        </span>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n  </mat-table>\n</div>\n\n  \n    "

/***/ }),

/***/ "../../../../../src/app/components/product-actions-table/product-actions-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  height: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  padding-left: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: 40px;\n    margin: 0px; }\n\n.mat-form-field {\n  font-size: 14px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-left: 32px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 34em; }\n\n.fixed-width {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100px;\n          flex: 0 0 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product-actions-table/product-actions-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductActionsTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_sources_product_actions__ = __webpack_require__("../../../../../src/app/data-sources/product-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_get_actions_by_ticker_service__ = __webpack_require__("../../../../../src/app/services/products/get-actions-by-ticker.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductActionsTableComponent = (function () {
    function ProductActionsTableComponent(service) {
        this.service = service;
        this.displayedColumns = ['num', 'date', 'firm', 'location', 'type', 'portfolio'];
    }
    ProductActionsTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__data_sources_product_actions__["a" /* ProductActionsSource */](this.ticker, this.service);
    };
    return ProductActionsTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ProductActionsTableComponent.prototype, "ticker", void 0);
ProductActionsTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'product-actions-table',
        template: __webpack_require__("../../../../../src/app/components/product-actions-table/product-actions-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/product-actions-table/product-actions-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_products_get_actions_by_ticker_service__["a" /* GetActionsByTickerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_products_get_actions_by_ticker_service__["a" /* GetActionsByTickerService */]) === "function" && _a || Object])
], ProductActionsTableComponent);

var _a;
//# sourceMappingURL=product-actions-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/product-firms-table/product-firms-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z4 raise\">\n  <div class=\"header\">\n    <h6>Views By Firm</h6> \n  </div>\n  <mat-table [dataSource]=\"dataSource\">\n      \n    <!-- Row Number Column -->\n    <ng-container matColumnDef=\"num\">\n      <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.rowNumber}} </mat-cell>\n    </ng-container>\n\n    <!-- Firm Column -->\n    <ng-container matColumnDef=\"firm\">\n      <mat-header-cell *matHeaderCellDef> Firm </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/firms/', row.firmId]\">{{row.firm}}</a></mat-cell>\n    </ng-container>\n\n    <!-- Users Column -->\n    <ng-container matColumnDef=\"users\">\n        <mat-header-cell *matHeaderCellDef class=\"fixed-width\"> Users </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"fixed-width\"> {{row.users}} </mat-cell>\n    </ng-container>\n\n    <!-- Views Column -->\n    <ng-container matColumnDef=\"views\">\n        <mat-header-cell *matHeaderCellDef class=\"fixed-width\"> Views </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"fixed-width\"><a [routerLink]=\"['./firms/', row.firmId]\">{{row.view_count}}</a></mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n  </mat-table>\n</div>\n\n      "

/***/ }),

/***/ "../../../../../src/app/components/product-firms-table/product-firms-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  height: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  padding-left: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: 40px;\n    margin: 0px; }\n\n.mat-form-field {\n  font-size: 14px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-left: 32px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 34em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product-firms-table/product-firms-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFirmsTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_sources_product_firms__ = __webpack_require__("../../../../../src/app/data-sources/product-firms.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_get_firms_by_ticker_service__ = __webpack_require__("../../../../../src/app/services/products/get-firms-by-ticker.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductFirmsTableComponent = (function () {
    function ProductFirmsTableComponent(service) {
        this.service = service;
        this.displayedColumns = ['num', 'firm', 'users', 'views'];
    }
    ProductFirmsTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__data_sources_product_firms__["a" /* ProductFirmsSource */](this.ticker, this.service);
    };
    return ProductFirmsTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ProductFirmsTableComponent.prototype, "ticker", void 0);
ProductFirmsTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'product-firms-table',
        template: __webpack_require__("../../../../../src/app/components/product-firms-table/product-firms-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/product-firms-table/product-firms-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_products_get_firms_by_ticker_service__["a" /* GetFirmsByTickerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_products_get_firms_by_ticker_service__["a" /* GetFirmsByTickerService */]) === "function" && _a || Object])
], ProductFirmsTableComponent);

var _a;
//# sourceMappingURL=product-firms-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products-table/products-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isLoaded\">\n  <div class=\"text-center\" style=\"position: absolute; top: 20vh; left: 50vw; margin-right: -50%;\n  transform: translate(-50%, -50%);\">\n    <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\n  </div>\n</div>\n<div *ngIf=\"isLoaded\" class=\"mat-elevation-z4\">\n  <div class=\"header\">\n      <h6>Products</h6>   \n  </div>\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> # </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.rowNumber}}</mat-cell>\n    </ng-container>\n\n    <!-- Ticker Column -->\n    <ng-container matColumnDef=\"ticker\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Ticker </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/products/', row.ticker]\">{{row.ticker}}</a></mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/products/', row.ticker]\">{{row.name}}</a></mat-cell>\n    </ng-container>\n\n    <!-- Issuer Column -->\n    <ng-container matColumnDef=\"issuer\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Issuer </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.issuer_name}}</mat-cell>\n    </ng-container>\n\n    <!-- ViewCount Column -->\n    <ng-container matColumnDef=\"views\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Views </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.view_count}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/products-table/products-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  min-height: 2em;\n  line-height: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: inherit;\n    margin: 0px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 34em; }\n\n.mat-header-cell .mat-sort-header-sorted {\n  color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products-table/products-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_sources_products__ = __webpack_require__("../../../../../src/app/data-sources/products.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_get_all_products_service__ = __webpack_require__("../../../../../src/app/services/products/get-all-products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsTableComponent = (function () {
    function ProductsTableComponent(service) {
        var _this = this;
        this.service = service;
        this.isLoaded = false;
        this.onCompleted = function () {
            _this.isLoaded = true;
        };
        this.displayedColumns = ['id', 'ticker', 'name', 'issuer', 'views'];
    }
    ProductsTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__data_sources_products__["a" /* ProductsSource */](this.service);
        setTimeout(function () { _this.onCompleted(); }, 1000);
    };
    return ProductsTableComponent;
}());
ProductsTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'products-table',
        template: __webpack_require__("../../../../../src/app/components/products-table/products-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products-table/products-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_products_get_all_products_service__["a" /* GetAllProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_products_get_all_products_service__["a" /* GetAllProductsService */]) === "function" && _a || Object])
], ProductsTableComponent);

var _a;
//# sourceMappingURL=products-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search-results-table/search-results-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z4 raise\">\n  <div class=\"header\">\n    <h6>Results for \"{{term}}\"</h6>  \n  </div>\n  <mat-table [dataSource]=\"dataSource\">\n      \n    <!-- Row Number Column -->\n    <ng-container matColumnDef=\"num\">\n      <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.rowNumber}} </mat-cell>\n    </ng-container>\n\n    <!-- Link Column -->\n    <ng-container matColumnDef=\"link\">\n      <mat-header-cell *matHeaderCellDef> Link </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <a *ngIf=\"row.id\" [routerLink]=\"['/firms/', row.id]\">{{row.link}}</a>      \n          <a *ngIf=\"row.ticker\" [routerLink]=\"['/products/', row.ticker]\">{{row.link}}</a>\n        </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n  </mat-table>\n</div>\n  \n    \n      \n"

/***/ }),

/***/ "../../../../../src/app/components/search-results-table/search-results-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  height: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  padding-left: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: 40px;\n    margin: 0px; }\n\n.mat-form-field {\n  font-size: 14px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-left: 32px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 34em; }\n\n.fixed-width {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100px;\n          flex: 0 0 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search-results-table/search-results-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_sources_search_results__ = __webpack_require__("../../../../../src/app/data-sources/search-results.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_get_search_results_service__ = __webpack_require__("../../../../../src/app/services/search/get-search-results.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchResultsTableComponent = (function () {
    function SearchResultsTableComponent(service) {
        this.service = service;
        this.displayedColumns = ['num', 'link'];
    }
    SearchResultsTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__data_sources_search_results__["a" /* SearchResultsSource */](this.service, this.term);
    };
    return SearchResultsTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], SearchResultsTableComponent.prototype, "term", void 0);
SearchResultsTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'search-results-table',
        template: __webpack_require__("../../../../../src/app/components/search-results-table/search-results-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search-results-table/search-results-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_search_get_search_results_service__["a" /* GetSearchResultsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_search_get_search_results_service__["a" /* GetSearchResultsService */]) === "function" && _a || Object])
], SearchResultsTableComponent);

var _a;
//# sourceMappingURL=search-results-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/data-sources/firm-actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmActionsSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FirmActionsSource = (function (_super) {
    __extends(FirmActionsSource, _super);
    function FirmActionsSource(firmId, service) {
        var _this = _super.call(this) || this;
        _this.firmId = firmId;
        _this.service = service;
        return _this;
    }
    FirmActionsSource.prototype.connect = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (subscriber) {
            _this.service.getActionsById(_this.firmId).subscribe(function (response) {
                var data = response.json();
                var count = 1;
                data.map(function (row) {
                    row.rowNumber = (count + '.');
                    count++;
                    //portfolio
                    var arr = [];
                    var dict = JSON.parse(row.portfolio);
                    for (var key in dict) {
                        var percentage = dict[key];
                        percentage = percentage.toString();
                        percentage = percentage.replace(/"/g, "");
                        percentage = percentage.concat('%');
                        var pair = {
                            ticker: key.toUpperCase(),
                            percentage: percentage
                        };
                        arr.push(pair);
                    }
                    row.portfolio = arr;
                    return row;
                });
                subscriber.next(data);
            });
        });
    };
    FirmActionsSource.prototype.disconnect = function () { };
    return FirmActionsSource;
}(__WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__["a" /* DataSource */]));

//# sourceMappingURL=firm-actions.js.map

/***/ }),

/***/ "../../../../../src/app/data-sources/firm-views.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmViewsSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FirmViewsSource = (function (_super) {
    __extends(FirmViewsSource, _super);
    function FirmViewsSource(firmId, service) {
        var _this = _super.call(this) || this;
        _this.firmId = firmId;
        _this.service = service;
        return _this;
    }
    FirmViewsSource.prototype.connect = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (subscriber) {
            _this.service.getViewsById(_this.firmId).subscribe(function (response) {
                var data = response.json();
                var count = 1;
                data.map(function (row) {
                    row.rowNumber = (count + '.');
                    count++;
                    return row;
                });
                subscriber.next(data);
            });
        });
    };
    FirmViewsSource.prototype.disconnect = function () { };
    return FirmViewsSource;
}(__WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__["a" /* DataSource */]));

//# sourceMappingURL=firm-views.js.map

/***/ }),

/***/ "../../../../../src/app/data-sources/firms.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmsSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FirmsSource = (function (_super) {
    __extends(FirmsSource, _super);
    function FirmsSource(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        return _this;
    }
    FirmsSource.prototype.connect = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (subscriber) {
            _this.service.getAll().subscribe(function (data) {
                var firmsData = JSON.parse(data.text());
                if (firmsData.data) {
                    firmsData = firmsData.data.firms;
                }
                var count = 1;
                firmsData = firmsData.map(function (el) {
                    el.rowNumber = (count + '.');
                    count++;
                    return el;
                });
                subscriber.next(firmsData);
            });
        });
    };
    FirmsSource.prototype.disconnect = function () { };
    return FirmsSource;
}(__WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__["a" /* DataSource */]));

//# sourceMappingURL=firms.js.map

/***/ }),

/***/ "../../../../../src/app/data-sources/fp-combo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FpComboSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FpComboSource = (function (_super) {
    __extends(FpComboSource, _super);
    function FpComboSource(service, id, ticker) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.id = id;
        _this.ticker = ticker;
        return _this;
    }
    FpComboSource.prototype.connect = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (subscriber) {
            _this.service.getFpCombo(_this.id, _this.ticker).subscribe(function (response) {
                var data = response.json();
                var count = 1;
                data.map(function (row) {
                    row.rowNumber = (count + '.');
                    count++;
                    //portfolio
                    var arr = [];
                    var dict = JSON.parse(row.portfolio);
                    for (var key in dict) {
                        var percentage = dict[key];
                        percentage = percentage.toString();
                        percentage = percentage.replace(/"/g, "");
                        percentage = percentage.concat('%');
                        var pair = {
                            ticker: key.toUpperCase(),
                            percentage: percentage
                        };
                        arr.push(pair);
                    }
                    row.portfolio = arr;
                    return row;
                });
                subscriber.next(data);
            });
        });
    };
    FpComboSource.prototype.disconnect = function () { };
    return FpComboSource;
}(__WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__["a" /* DataSource */]));

//# sourceMappingURL=fp-combo.js.map

/***/ }),

/***/ "../../../../../src/app/data-sources/product-actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductActionsSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ProductActionsSource = (function (_super) {
    __extends(ProductActionsSource, _super);
    // @Output() 
    // complete: EventEmitter<boolean> = new EventEmitter<boolean>();
    function ProductActionsSource(ticker, service) {
        var _this = _super.call(this) || this;
        _this.ticker = ticker;
        _this.service = service;
        return _this;
    }
    ProductActionsSource.prototype.connect = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (subscriber) {
            _this.service.getActionsByTicker(_this.ticker).subscribe(function (response) {
                var data = response.json();
                var count = 1;
                data.map(function (row) {
                    row.rowNumber = (count + '.');
                    count++;
                    var arr = [];
                    var dict = JSON.parse(row.portfolio);
                    for (var key in dict) {
                        var percentage = dict[key];
                        percentage = percentage.toString();
                        percentage = percentage.replace(/"/g, "");
                        percentage = percentage.concat('%');
                        var pair = {
                            ticker: key.toUpperCase(),
                            percentage: percentage
                        };
                        arr.push(pair);
                    }
                    row.portfolio = arr;
                    var location = {
                        address: row.address
                    };
                    return row;
                });
                subscriber.next(data);
            });
        });
    };
    ProductActionsSource.prototype.disconnect = function () { };
    return ProductActionsSource;
}(__WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__["a" /* DataSource */]));

//# sourceMappingURL=product-actions.js.map

/***/ }),

/***/ "../../../../../src/app/data-sources/product-firms.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFirmsSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductFirmsSource = (function (_super) {
    __extends(ProductFirmsSource, _super);
    function ProductFirmsSource(ticker, service) {
        var _this = _super.call(this) || this;
        _this.ticker = ticker;
        _this.service = service;
        _this.complete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        return _this;
    }
    ProductFirmsSource.prototype.connect = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (subscriber) {
            _this.service.getFirmsByTicker(_this.ticker).subscribe(function (response) {
                var data = response.json();
                var count = 1;
                data.map(function (row) {
                    row.rowNumber = (count + '.');
                    count++;
                    return row;
                });
                _this.complete.emit(true);
                subscriber.next(data);
            });
        });
    };
    ProductFirmsSource.prototype.disconnect = function () { };
    return ProductFirmsSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], ProductFirmsSource.prototype, "complete", void 0);
var _a;
//# sourceMappingURL=product-firms.js.map

/***/ }),

/***/ "../../../../../src/app/data-sources/products.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ProductsSource = (function (_super) {
    __extends(ProductsSource, _super);
    function ProductsSource(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.filterChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]('');
        return _this;
    }
    /*
    constructor(private service: GetAllProductsService, public onCompleted: any) {
        super();
    }
    */
    ProductsSource.prototype.changeFilter = function (text) {
        this.filterChange.next(text.toUpperCase());
    };
    ProductsSource.prototype.connect = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (subscriber) {
            _this.service.getAll().subscribe(function (response) {
                var data = response.json();
                if (data && data.products) {
                    data = data.products;
                }
                else if (data.data && data.data.products) {
                    data = data.data.products;
                }
                var count = 1;
                data.map(function (row) {
                    row.rowNumber = (count + '.');
                    count++;
                    row.ticker = row.ticker.toUpperCase();
                    return row;
                });
                subscriber.next(data);
                //filter
                _this.filterChange.debounceTime(500).distinctUntilChanged().subscribe(function (filter) {
                    if (filter === '' || !filter) {
                        return subscriber.next(data);
                    }
                    var copy = data.slice();
                    copy = copy.filter(function (row) {
                        if (!row.name)
                            return false;
                        var name = row.name.toUpperCase();
                        return name.indexOf(filter) > -1;
                    });
                    subscriber.next(copy);
                });
            });
        });
    };
    ProductsSource.prototype.disconnect = function () { };
    return ProductsSource;
}(__WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__["a" /* DataSource */]));

//# sourceMappingURL=products.js.map

/***/ }),

/***/ "../../../../../src/app/data-sources/search-results.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SearchResultsSource = (function (_super) {
    __extends(SearchResultsSource, _super);
    function SearchResultsSource(service, term) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.term = term;
        return _this;
    }
    SearchResultsSource.prototype.connect = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (subscriber) {
            _this.service.getSearchResults(_this.term).subscribe(function (response) {
                var data = response.json();
                var count = 1;
                data.map(function (row) {
                    row.rowNumber = (count + '.');
                    if (row.ticker) {
                        row.link = row.ticker + " | " + row.name;
                    }
                    else {
                        row.link = "" + row.name;
                    }
                    count++;
                    return row;
                });
                subscriber.next(data);
            });
        });
    };
    SearchResultsSource.prototype.disconnect = function () { };
    return SearchResultsSource;
}(__WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__["a" /* DataSource */]));

//# sourceMappingURL=search-results.js.map

/***/ }),

/***/ "../../../../../src/app/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatStepperModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatStepperModule */]
        ],
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/asset-class/asset-class.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  asset-class works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/asset-class/asset-class.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/asset-class/asset-class.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetClassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssetClassComponent = (function () {
    function AssetClassComponent() {
    }
    AssetClassComponent.prototype.ngOnInit = function () {
    };
    return AssetClassComponent;
}());
AssetClassComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'asset-class',
        template: __webpack_require__("../../../../../src/app/pages/asset-class/asset-class.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/asset-class/asset-class.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AssetClassComponent);

//# sourceMappingURL=asset-class.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/asset-classes/asset-classes.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row.bg-primary {\n  margin-bottom: 3.125em; }\n\n.text-center.title {\n  color: #fff;\n  padding-top: 1.2em;\n  padding-bottom: 1.2em;\n  width: 100vw; }\n\n/*\n// Tables\ntable.table {\n  border-radius: .5em !important;\n}\n// Graphs\n.graph {\n  margin-bottom: 3.5em;\n}\n.col-md-10.graph.card {\n  padding: 0;\n}\n*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/asset-classes/asset-classes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetClassesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssetClassesComponent = (function () {
    function AssetClassesComponent() {
    }
    AssetClassesComponent.prototype.ngOnInit = function () {
    };
    return AssetClassesComponent;
}());
AssetClassesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'asset-classes',
        template: "<div class=\"container-fluid\">\n              <page-title title=\"Asset Classes\"></page-title>\n              <div class=\"row justify-content-around\">\n                  <div class=\"col-md-12\">\n                  <div class=\"mat-elevation-z4\">\n                      <asset-classes-table></asset-classes-table>\n                  </div>\n                  </div>\n              </div>\n            </div>",
        styles: [__webpack_require__("../../../../../src/app/pages/asset-classes/asset-classes.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AssetClassesComponent);

//# sourceMappingURL=asset-classes.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/countries/countries.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <page-title title=\"Countries\"></page-title>\n    <div class=\"row justify-content-around\">\n        <div class=\"col-md-12\">\n        <div class=\"mat-elevation-z4\">\n            <countries-table></countries-table>\n        </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/countries/countries.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row.bg-primary {\n  margin-bottom: 3.125em; }\n\n.text-center.title {\n  color: #fff;\n  padding-top: 1.2em;\n  padding-bottom: 1.2em;\n  width: 100vw; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/countries/countries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountriesComponent = (function () {
    function CountriesComponent() {
    }
    CountriesComponent.prototype.ngOnInit = function () { };
    return CountriesComponent;
}());
CountriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'countries',
        template: __webpack_require__("../../../../../src/app/pages/countries/countries.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/countries/countries.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CountriesComponent);

//# sourceMappingURL=countries.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/country/country.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  country works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/country/country.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/country/country.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountryComponent = (function () {
    function CountryComponent() {
    }
    CountryComponent.prototype.ngOnInit = function () {
    };
    return CountryComponent;
}());
CountryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'country',
        template: __webpack_require__("../../../../../src/app/pages/country/country.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/country/country.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CountryComponent);

//# sourceMappingURL=country.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <page-title title=\"Dashboard\"></page-title>\n  \n  <!-- First Row ( Line Graph & Data Table ) -->\n  <div *ngIf=\"!isLoaded\">\n    <div class=\"text-center\" style=\"position: absolute; top: 48vh; left: 50vw; margin-right: -50%;\n    transform: translate(-50%, -50%);\">\n      <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\n    </div>\n  </div>\n  <div *ngIf=\"isLoaded\" class=\"row justify-content-around\">\n      <div class=\"col-md-6\">\n        <div class=\"mat-elevation-z4\">\n          <dashboard-my-products-table></dashboard-my-products-table>\n        </div>\n      </div>\n\n      <div class=\"col-md-6\">\n        <div class=\"mat-elevation-z4\">\n          <dashboard-views-by-firm-table></dashboard-views-by-firm-table>\n        </div>\n      </div>\n  </div>\n  <!-- End of First Row  ( Line Graph & Data Table )    -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row.bg-primary {\n  margin-bottom: 3.125em; }\n\n.text-center.title {\n  color: #fff;\n  padding-top: 1.2em;\n  padding-bottom: 1.2em;\n  width: 100%; }\n\n.header {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.mat-form-field {\n  font-size: 14px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-left: 32px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.col-md-6 {\n  margin-bottom: 5em; }\n\ntable.table {\n  border-radius: .5em !important; }\n\n.graph {\n  margin-bottom: 3.5em; }\n\n.col-md-10.graph.card {\n  padding: 0; }\n\na {\n  color: #337ab7; }\n\na:link:hover {\n  color: #365ab5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.isLoaded = false;
        this.onCompleted = function () {
            _this.isLoaded = true;
        };
        this.displayedColumns = ['id', 'name', 'views'];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { _this.onCompleted(); }, 1000);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/firm/firm.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <page-title [title]=\"pageTitle\"></page-title>\n  <div *ngIf=\"!isLoaded\">\n    <div class=\"text-center\" style=\"position: absolute; top: 48vh; left: 50vw; margin-right: -50%;\n    transform: translate(-50%, -50%);\">\n      <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\n    </div>\n  </div>\n  <div *ngIf=\"isLoaded\" class=\"row justify-content-around tables-container\">\n    <!--<div class=\"col-md-12\">\n      <div class=\"mat-elevation-z4 info\">\n        <div>\n            <h6>Issuer: <span>{{data.issuer}}</span></h6>\n            <h6>Asset Class: <span>{{data.asset_class}}</span></h6>\n            <h6>Development Class: <span>{{data.development_class}}</span></h6>\n            <h6>Category: <span>{{data.category}}</span></h6>\n        </div> \n        <div>\n            <h6>Region: <span>{{data.region}}</span></h6>              \n            <h6>Sub-Region: <span>{{data.sub_region}}</span></h6>\n            <h6>Total Views: <span>{{data.view_count}}</span></h6>\n            <h6>Last updated: <span>{{data.updated_at}}</span></h6>\n        </div>\n      </div>\n    </div>-->\n    <div class=\"col-md-12\">\n      <firm-views-table [firmId]=\"firmId\"></firm-views-table>\n    </div>\n    <div class=\"col-md-12\">\n        <firm-actions-table [firmId]=\"firmId\"></firm-actions-table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/firm/firm.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-md-6, .col-md-12 {\n  margin-bottom: 5em; }\n\n.tables-container {\n  margin-top: -20px; }\n\n.col-md-6, .col-md-12 {\n  margin-bottom: 2em; }\n\n.info {\n  padding-top: 10px; }\n  .info div {\n    height: 120px;\n    font-family: inherit;\n    padding-left: 24px;\n    box-sizing: border-box; }\n    .info div h6 {\n      height: 30px;\n      margin: 0px; }\n      .info div h6 span {\n        font-weight: normal;\n        color: #777; }\n\n@media (min-width: 768px) {\n  .info div {\n    display: inline-block;\n    width: 49%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/firm/firm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firms_get_firm_info_by_id_service__ = __webpack_require__("../../../../../src/app/services/firms/get-firm-info-by-id.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirmComponent = (function () {
    function FirmComponent(route, service) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.isLoaded = false;
        document.title = 'ETFG';
        this.route.params.subscribe(function (params) { return _this.firmId = params.id; });
        this.subscription = this.service.getInfoById(this.firmId).subscribe(function (response) {
            var data = response.json();
            _this.data = data;
            _this.pageTitle = data.name;
            document.title = "ETFG | " + data.name;
        });
    }
    FirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { _this.isLoaded = true; }, 1000);
    };
    FirmComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return FirmComponent;
}());
FirmComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'firm',
        template: __webpack_require__("../../../../../src/app/pages/firm/firm.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/firm/firm.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_firms_get_firm_info_by_id_service__["a" /* GetFirmInfoByIdService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_firms_get_firm_info_by_id_service__["a" /* GetFirmInfoByIdService */]) === "function" && _b || Object])
], FirmComponent);

var _a, _b;
//# sourceMappingURL=firm.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/firms/firms.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row.bg-primary {\n  margin-bottom: 3.125em; }\n\n.text-center.title {\n  color: #fff;\n  padding-top: 1.2em;\n  padding-bottom: 1.2em;\n  width: 100vw; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/firms/firms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirmsComponent = (function () {
    function FirmsComponent() {
    }
    FirmsComponent.prototype.ngOnInit = function () { };
    return FirmsComponent;
}());
FirmsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'firms',
        template: "<div class=\"container-fluid\">\n              <page-title title=\"Firms\"></page-title>\n              <div class=\"row justify-content-around\">\n                <div class=\"col-md-12\">\n                  <div class=\"mat-elevation-z4\">\n                    <firms-table></firms-table>\n                  </div>\n                </div>\n              </div>\n            </div>",
        styles: [__webpack_require__("../../../../../src/app/pages/firms/firms.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FirmsComponent);

//# sourceMappingURL=firms.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/fp-combo/fp-combo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <page-title [title]=\"pageTitle\"></page-title>\n  <div *ngIf=\"!isLoaded\">\n    <div class=\"text-center\" style=\"position: absolute; top: 48vh; left: 50vw; margin-right: -50%;\n    transform: translate(-50%, -50%);\">\n      <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\n    </div>\n  </div>\n  <div *ngIf=\"isLoaded\" class=\"row justify-content-around tables-container\">\n    <div class=\"col-md-12\">\n      <div class=\"mat-elevation-z4 info\">\n        <div>\n            <h6>Product Issuer: <span>{{productData.issuer}}</span></h6>\n            <h6>Product Asset Class: <span>{{productData.asset_class}}</span></h6>\n            <h6>Product Development Class: <span>{{productData.development_class}}</span></h6>\n            <h6>Product Category: <span>{{productData.category}}</span></h6>\n        </div> \n        <div>\n            <h6>Product Region: <span>{{productData.region}}</span></h6>              \n            <h6>Product Sub-Region: <span>{{productData.sub_region}}</span></h6>\n            <h6>Product Total Views: <span>{{productData.view_count}}</span></h6>\n            <h6>Product Last Updated: <span>{{productData.updated_at}}</span></h6>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <fp-combo-table [firmId]=\"firmId\" [ticker]=\"ticker\"></fp-combo-table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/fp-combo/fp-combo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-md-6, .col-md-12 {\n  margin-bottom: 5em; }\n\n.tables-container {\n  margin-top: -20px; }\n\n.col-md-6, .col-md-12 {\n  margin-bottom: 2em; }\n\n.info {\n  padding-top: 10px; }\n  .info div {\n    height: 120px;\n    font-family: inherit;\n    padding-left: 24px;\n    box-sizing: border-box; }\n    .info div h6 {\n      height: 30px;\n      margin: 0px; }\n      .info div h6 span {\n        font-weight: normal;\n        color: #777; }\n\n@media (min-width: 768px) {\n  .info div {\n    display: inline-block;\n    width: 49%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/fp-combo/fp-combo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FpComboComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firms_get_firm_info_by_id_service__ = __webpack_require__("../../../../../src/app/services/firms/get-firm-info-by-id.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_products_get_product_info_by_ticker_service__ = __webpack_require__("../../../../../src/app/services/products/get-product-info-by-ticker.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FpComboComponent = (function () {
    function FpComboComponent(route, productService, firmService) {
        var _this = this;
        this.route = route;
        this.productService = productService;
        this.firmService = firmService;
        this.isLoaded = false;
        document.title = 'ETFG';
        this.route.params.subscribe(function (params) {
            _this.firmId = params.id;
            _this.ticker = params.ticker;
        });
        this.productSubscription = this.productService.getInfoByTicker(this.ticker).subscribe(function (response) {
            var data = response.json();
            _this.productData = data;
            if (_this.pageTitle) {
                _this.pageTitle = _this.pageTitle.concat("\n\n" + (" " + data.ticker + " " + data.name));
            }
            else {
                _this.pageTitle = data.ticker + " " + data.name;
            }
        });
        this.firmSubscription = this.firmService.getInfoById(this.firmId).subscribe(function (response) {
            var data = response.json();
            _this.firmData = data;
            if (_this.pageTitle) {
                _this.pageTitle = _this.pageTitle.concat("\n\n" + (" " + data.name));
            }
            else {
                _this.pageTitle = "" + data.name;
            }
            document.title = "ETFG | " + data.name;
        });
    }
    FpComboComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { _this.isLoaded = true; }, 1000);
    };
    FpComboComponent.prototype.ngOnDestroy = function () {
        this.firmSubscription.unsubscribe();
        this.productSubscription.unsubscribe();
    };
    return FpComboComponent;
}());
FpComboComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'fp-combo',
        template: __webpack_require__("../../../../../src/app/pages/fp-combo/fp-combo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/fp-combo/fp-combo.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_products_get_product_info_by_ticker_service__["a" /* GetProductInfoByTickerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_products_get_product_info_by_ticker_service__["a" /* GetProductInfoByTickerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_firms_get_firm_info_by_id_service__["a" /* GetFirmInfoByIdService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_firms_get_firm_info_by_id_service__["a" /* GetFirmInfoByIdService */]) === "function" && _c || Object])
], FpComboComponent);

var _a, _b, _c;
//# sourceMappingURL=fp-combo.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/issuer/issuer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  issuer works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/issuer/issuer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/issuer/issuer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IssuerComponent = (function () {
    function IssuerComponent() {
    }
    IssuerComponent.prototype.ngOnInit = function () {
    };
    return IssuerComponent;
}());
IssuerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'issuer',
        template: __webpack_require__("../../../../../src/app/pages/issuer/issuer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/issuer/issuer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], IssuerComponent);

//# sourceMappingURL=issuer.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/issuers/issuers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <page-title title=\"Issuers\"></page-title>\n    <div class=\"row justify-content-around\">\n        <div class=\"col-md-12\">\n        <div class=\"mat-elevation-z4\">\n            <issuers-table></issuers-table>\n        </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/issuers/issuers.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row.bg-primary {\n  margin-bottom: 3.125em; }\n\n.text-center.title {\n  color: #fff;\n  padding-top: 1.2em;\n  padding-bottom: 1.2em;\n  width: 100vw; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/issuers/issuers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IssuersComponent = (function () {
    function IssuersComponent() {
    }
    IssuersComponent.prototype.ngOnInit = function () {
    };
    return IssuersComponent;
}());
IssuersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'issuers',
        template: __webpack_require__("../../../../../src/app/pages/issuers/issuers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/issuers/issuers.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], IssuersComponent);

//# sourceMappingURL=issuers.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!auth.isAuthenticated()\" class=\"text-center\">\n  <div class=\"jumbotron-container\">\n    <div class=\"jumbotron\">\n        <h1 class=\"display-3\">Welcome</h1>\n        <p class=\"lead\">Please log in or register to continue to the dashboard.</p>\n        <hr class=\"my-4\">\n        <button mat-raised-button (click)=\"auth.login()\" class=\"auth-button\">Log In</button>\n        <button mat-raised-button (click)=\"auth.signup()\" class=\"auth-button\">Sign Up</button>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron-container {\n  position: fixed;\n  width: 100%;\n  top: 140px;\n  text-align: center; }\n\n.jumbotron {\n  position: relative;\n  margin: auto;\n  border-radius: 0px;\n  box-shadow: none;\n  width: 100%;\n  transition: padding 0.3s, width 0.3s, background-color 0.3s, box-shadow 0.3s;\n  background-color: white; }\n  .jumbotron button {\n    margin: 5px 0px 10px 0px; }\n\n@media (min-width: 500px) {\n  .jumbotron {\n    width: 500px;\n    background-color: #f7f7f7;\n    box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingComponent = (function () {
    function LandingComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LandingComponent.prototype.ngOnInit = function () {
        if (this.auth.isAuthenticated()) {
            this.router.navigate(['/dashboard']);
        }
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'landing',
        template: __webpack_require__("../../../../../src/app/pages/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/landing/landing.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LandingComponent);

var _a, _b;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <page-title [title]=\"pageTitle\"></page-title>\n  <div *ngIf=\"!isLoaded\">\n      <div class=\"text-center\" style=\"position: absolute; top: 48vh; left: 50vw; margin-right: -50%;\n      transform: translate(-50%, -50%);\">\n          <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\n      </div>\n  </div>\n  <div *ngIf=\"isLoaded\" class=\"row justify-content-around tables-container\">\n      <div class=\"col-md-12\">\n        <div class=\"mat-elevation-z4 info\">\n          <div>\n              <h6>Issuer: <span>{{data.issuer}}</span></h6>\n              <h6>Asset Class: <span>{{data.asset_class}}</span></h6>\n              <h6>Development Class: <span>{{data.development_class}}</span></h6>\n              <h6>Category: <span>{{data.category}}</span></h6>\n          </div> \n          <div>\n              <h6>Region: <span>{{data.region}}</span></h6>              \n              <h6>Sub-Region: <span>{{data.sub_region}}</span></h6>\n              <h6>Total Views: <span>{{data.view_count}}</span></h6>\n              <h6>Last Updated: <span>{{data.updated_at}}</span></h6>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n          <product-firms-table [ticker]=\"ticker\"></product-firms-table>\n      </div>\n      <div class=\"col-md-12\">\n          <product-actions-table [ticker]=\"ticker\"></product-actions-table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/product/product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row.bg-primary {\n  margin-bottom: 3.125em; }\n\n.text-center.title {\n  color: #fff;\n  padding-top: 1.2em;\n  padding-bottom: 1.2em;\n  width: 100%; }\n\n.tables-container {\n  margin-top: -20px; }\n\n.col-md-6, .col-md-12 {\n  margin-bottom: 2em; }\n\n.info {\n  padding-top: 10px; }\n  .info div {\n    height: 120px;\n    font-family: inherit;\n    padding-left: 24px;\n    box-sizing: border-box; }\n    .info div h6 {\n      height: 30px;\n      margin: 0px; }\n      .info div h6 span {\n        font-weight: normal;\n        color: #777; }\n\n@media (min-width: 768px) {\n  .info div {\n    display: inline-block;\n    width: 49%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_get_product_info_by_ticker_service__ = __webpack_require__("../../../../../src/app/services/products/get-product-info-by-ticker.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = (function () {
    function ProductComponent(route, service) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.isLoaded = false;
        document.title = 'ETFG';
        this.route.params.subscribe(function (params) { return _this.ticker = params.ticker; });
        this.subscription = this.service.getInfoByTicker(this.ticker).subscribe(function (response) {
            var data = response.json();
            _this.data = data;
            _this.pageTitle = data.ticker + " - " + data.name;
            document.title = "ETFG | " + data.ticker;
        });
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { _this.isLoaded = true; }, 1000);
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'product',
        template: __webpack_require__("../../../../../src/app/pages/product/product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/product/product.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_products_get_product_info_by_ticker_service__["a" /* GetProductInfoByTickerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_products_get_product_info_by_ticker_service__["a" /* GetProductInfoByTickerService */]) === "function" && _b || Object])
], ProductComponent);

var _a, _b;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/products/products.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row.bg-primary {\n  margin-bottom: 3.125em; }\n\n.text-center.title {\n  color: #fff;\n  padding-top: 1.2em;\n  padding-bottom: 1.2em;\n  width: 100vw; }\n\n/*\nh1 {\n  text-align: center;\n}\n// Tables\ntable.table {\n  border-radius: .5em !important;\n}\n// Graphs\n.graph {\n  margin-bottom: 3.5em;\n}\n.col-md-7.graph.card {\n  padding: 0;\n}\n*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () { };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'products',
        template: "<div class=\"container-fluid\">\n              <page-title title=\"Products\"></page-title>\n              <div class=\"row justify-content-around\">\n                <div class=\"col-md-12\">\n                  <products-table></products-table>\n                </div>\n              </div>\n            </div>",
        styles: [__webpack_require__("../../../../../src/app/pages/products/products.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductsComponent);

//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/search-results/search-results.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <page-title [title]=\"pageTitle\"></page-title>\n  <div *ngIf=\"!isLoaded\">\n      <div class=\"text-center\" style=\"position: absolute; top: 48vh; left: 50vw; margin-right: -50%;\n      transform: translate(-50%, -50%);\">\n          <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\n      </div>\n  </div>\n  <div *ngIf=\"isLoaded\" class=\"row justify-content-around tables-container\">\n    <div class=\"col-md-12\">\n        <search-results-table [term]=\"term\"></search-results-table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/search-results/search-results.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row.bg-primary {\n  margin-bottom: 3.125em; }\n\n.text-center.title {\n  color: #fff;\n  padding-top: 1.2em;\n  padding-bottom: 1.2em;\n  width: 100%; }\n\n.tables-container {\n  margin-top: -20px; }\n\n.col-md-6, .col-md-12 {\n  margin-bottom: 2em; }\n\n.info {\n  padding-top: 10px; }\n  .info div {\n    height: 120px;\n    font-family: inherit;\n    padding-left: 24px;\n    box-sizing: border-box; }\n    .info div h6 {\n      height: 30px;\n      margin: 0px; }\n      .info div h6 span {\n        font-weight: normal;\n        color: #777; }\n\n@media (min-width: 768px) {\n  .info div {\n    display: inline-block;\n    width: 49%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/search-results/search-results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_get_search_results_service__ = __webpack_require__("../../../../../src/app/services/search/get-search-results.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchResultsComponent = (function () {
    function SearchResultsComponent(route, service, router) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.router = router;
        this.pageTitle = 'Search';
        this.noResults = false;
        this.isLoaded = false;
        document.title = 'ETFG | Search';
        this.route.params.subscribe(function (params) { return _this.term = params.term; });
        this.subscription = this.service.getSearchResults(this.term).subscribe(function (response) {
            _this.data = response.json();
            //route if exact match to ticker
            // if(this.data && this.data[0].ticker.toLowerCase()===this.term.toLowerCase()) {
            //   this.router.navigateByUrl(`/products/${this.term}`);
            // }
        });
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { _this.isLoaded = true; }, 1000);
    };
    SearchResultsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return SearchResultsComponent;
}());
SearchResultsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-results',
        template: __webpack_require__("../../../../../src/app/pages/search-results/search-results.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/search-results/search-results.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_search_get_search_results_service__["a" /* GetSearchResultsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_search_get_search_results_service__["a" /* GetSearchResultsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SearchResultsComponent);

var _a, _b, _c;
//# sourceMappingURL=search-results.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/asset-classes/asset-classes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetClassesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AssetClassesService = (function () {
    function AssetClassesService(http) {
        this.http = http;
    }
    AssetClassesService.prototype.getFirms = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + "/api/assetclasses");
    };
    return AssetClassesService;
}());
AssetClassesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], AssetClassesService);

var _a;
//# sourceMappingURL=asset-classes.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/countries/countries.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountriesService = (function () {
    function CountriesService(http) {
        this.http = http;
    }
    CountriesService.prototype.getCountries = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + "/api/ip-countries");
    };
    return CountriesService;
}());
CountriesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], CountriesService);

var _a;
//# sourceMappingURL=countries.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/firms/get-actions-by-firm-id.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetActionsByFirmIdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetActionsByFirmIdService = (function () {
    function GetActionsByFirmIdService(http) {
        this.http = http;
    }
    GetActionsByFirmIdService.prototype.getActionsById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + "/api/firms/actions/" + id);
    };
    return GetActionsByFirmIdService;
}());
GetActionsByFirmIdService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], GetActionsByFirmIdService);

var _a;
//# sourceMappingURL=get-actions-by-firm-id.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/firms/get-all-firms.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAllFirmsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetAllFirmsService = (function () {
    function GetAllFirmsService(http) {
        this.http = http;
    }
    GetAllFirmsService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + "/api/firms");
    };
    return GetAllFirmsService;
}());
GetAllFirmsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], GetAllFirmsService);

var _a;
//# sourceMappingURL=get-all-firms.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/firms/get-firm-info-by-id.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetFirmInfoByIdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetFirmInfoByIdService = (function () {
    function GetFirmInfoByIdService(http) {
        this.http = http;
    }
    GetFirmInfoByIdService.prototype.getInfoById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + "/api/firms/" + id);
    };
    return GetFirmInfoByIdService;
}());
GetFirmInfoByIdService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], GetFirmInfoByIdService);

var _a;
//# sourceMappingURL=get-firm-info-by-id.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/firms/get-views-by-firm-id.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetViewsByFirmIdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetViewsByFirmIdService = (function () {
    function GetViewsByFirmIdService(http) {
        this.http = http;
    }
    GetViewsByFirmIdService.prototype.getViewsById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + "/api/firms/views/" + id);
    };
    return GetViewsByFirmIdService;
}());
GetViewsByFirmIdService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], GetViewsByFirmIdService);

var _a;
//# sourceMappingURL=get-views-by-firm-id.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/fp-combo/fp-combo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FpComboService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FpComboService = (function () {
    function FpComboService(http) {
        this.http = http;
    }
    FpComboService.prototype.getFpCombo = function (id, ticker) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + "/api/products/" + ticker + "/firms/" + id);
    };
    return FpComboService;
}());
FpComboService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FpComboService);

var _a;
//# sourceMappingURL=fp-combo.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/issuers/issuers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IssuersService = (function () {
    function IssuersService(http) {
        this.http = http;
    }
    IssuersService.prototype.getFirms = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + "/api/issuers");
    };
    return IssuersService;
}());
IssuersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], IssuersService);

var _a;
//# sourceMappingURL=issuers.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/products/get-actions-by-ticker.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetActionsByTickerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetActionsByTickerService = (function () {
    function GetActionsByTickerService(http) {
        this.http = http;
    }
    GetActionsByTickerService.prototype.getActionsByTicker = function (ticker) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + "/api/products/actions/" + ticker);
    };
    return GetActionsByTickerService;
}());
GetActionsByTickerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], GetActionsByTickerService);

var _a;
//# sourceMappingURL=get-actions-by-ticker.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/products/get-all-products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAllProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetAllProductsService = (function () {
    function GetAllProductsService(http) {
        this.http = http;
    }
    GetAllProductsService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + "/api/products");
    };
    return GetAllProductsService;
}());
GetAllProductsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], GetAllProductsService);

var _a;
//# sourceMappingURL=get-all-products.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/products/get-firms-by-ticker.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetFirmsByTickerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetFirmsByTickerService = (function () {
    function GetFirmsByTickerService(http) {
        this.http = http;
    }
    GetFirmsByTickerService.prototype.getFirmsByTicker = function (ticker) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + "/api/products/firms/" + ticker);
    };
    return GetFirmsByTickerService;
}());
GetFirmsByTickerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], GetFirmsByTickerService);

var _a;
//# sourceMappingURL=get-firms-by-ticker.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/products/get-product-info-by-ticker.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetProductInfoByTickerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetProductInfoByTickerService = (function () {
    function GetProductInfoByTickerService(http) {
        this.http = http;
    }
    GetProductInfoByTickerService.prototype.getInfoByTicker = function (ticker) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + "/api/products/" + ticker);
    };
    return GetProductInfoByTickerService;
}());
GetProductInfoByTickerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], GetProductInfoByTickerService);

var _a;
//# sourceMappingURL=get-product-info-by-ticker.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/search/get-search-results.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetSearchResultsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetSearchResultsService = (function () {
    function GetSearchResultsService(http) {
        this.http = http;
    }
    GetSearchResultsService.prototype.getSearchResults = function (term) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + "/api/search/" + term);
    };
    return GetSearchResultsService;
}());
GetSearchResultsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], GetSearchResultsService);

var _a;
//# sourceMappingURL=get-search-results.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: 'http://etfg-env-2.us-east-1.elasticbeanstalk.com',
    apiBaseUrl: 'http://etfg-env-2.us-east-1.elasticbeanstalk.com'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map