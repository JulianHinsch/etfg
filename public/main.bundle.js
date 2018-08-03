webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_pages_landing_landing_component__ = __webpack_require__("../../../../../src/app/components/pages/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_pages_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_pages_firm_firm_component__ = __webpack_require__("../../../../../src/app/components/pages/firm/firm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_pages_firms_firms_component__ = __webpack_require__("../../../../../src/app/components/pages/firms/firms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_pages_product_product_component__ = __webpack_require__("../../../../../src/app/components/pages/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_pages_products_products_component__ = __webpack_require__("../../../../../src/app/components/pages/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_pages_fp_combo_fp_combo_component__ = __webpack_require__("../../../../../src/app/components/pages/fp-combo/fp-combo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_pages_search_results_search_results_component__ = __webpack_require__("../../../../../src/app/components/pages/search-results/search-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__callback_callback_component__ = __webpack_require__("../../../../../src/app/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__components_pages_landing_landing_component__["a" /* LandingComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__components_pages_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'firms', component: __WEBPACK_IMPORTED_MODULE_5__components_pages_firms_firms_component__["a" /* FirmsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'firms/:id', component: __WEBPACK_IMPORTED_MODULE_4__components_pages_firm_firm_component__["a" /* FirmComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'firms/:id/products/:ticker', component: __WEBPACK_IMPORTED_MODULE_8__components_pages_fp_combo_fp_combo_component__["a" /* FpComboComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_7__components_pages_products_products_component__["a" /* ProductsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'products/:ticker', component: __WEBPACK_IMPORTED_MODULE_6__components_pages_product_product_component__["a" /* ProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'products/:ticker/firms/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_pages_fp_combo_fp_combo_component__["a" /* FpComboComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'search/:term', component: __WEBPACK_IMPORTED_MODULE_9__components_pages_search_results_search_results_component__["a" /* SearchResultsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_auth_guard_service__["a" /* AuthGuardService */]], pathMatch: 'full' },
    { path: 'callback', component: __WEBPACK_IMPORTED_MODULE_10__callback_callback_component__["a" /* CallbackComponent */] },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_firms_get_firm_info_by_id_service__ = __webpack_require__("../../../../../src/app/services/firms/get-firm-info-by-id.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_products_get_product_info_by_ticker_service__ = __webpack_require__("../../../../../src/app/services/products/get-product-info-by-ticker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_auth_interceptor_service__ = __webpack_require__("../../../../../src/app/auth/auth-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__callback_callback_component__ = __webpack_require__("../../../../../src/app/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_title_page_title_component__ = __webpack_require__("../../../../../src/app/components/page-title/page-title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_tables_dashboard_tables_dashboard_top_products_table_dashboard_top_products_table_component__ = __webpack_require__("../../../../../src/app/components/tables/dashboard-tables/dashboard-top-products-table/dashboard-top-products-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_tables_dashboard_tables_dashboard_views_by_firm_table_dashboard_views_by_firm_table_component__ = __webpack_require__("../../../../../src/app/components/tables/dashboard-tables/dashboard-views-by-firm-table/dashboard-views-by-firm-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_tables_product_actions_table_product_actions_table_component__ = __webpack_require__("../../../../../src/app/components/tables/product-actions-table/product-actions-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_tables_firm_actions_table_firm_actions_table_component__ = __webpack_require__("../../../../../src/app/components/tables/firm-actions-table/firm-actions-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_tables_firm_views_table_firm_views_table_component__ = __webpack_require__("../../../../../src/app/components/tables/firm-views-table/firm-views-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_tables_fp_combo_table_fp_combo_table_component__ = __webpack_require__("../../../../../src/app/components/tables/fp-combo-table/fp-combo-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_tables_search_results_table_search_results_table_component__ = __webpack_require__("../../../../../src/app/components/tables/search-results-table/search-results-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_tables_products_table_products_table_component__ = __webpack_require__("../../../../../src/app/components/tables/products-table/products-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_tables_firms_table_firms_table_component__ = __webpack_require__("../../../../../src/app/components/tables/firms-table/firms-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_tables_product_firms_table_product_firms_table_component__ = __webpack_require__("../../../../../src/app/components/tables/product-firms-table/product-firms-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_pages_landing_landing_component__ = __webpack_require__("../../../../../src/app/components/pages/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_pages_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_pages_firm_firm_component__ = __webpack_require__("../../../../../src/app/components/pages/firm/firm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_pages_firms_firms_component__ = __webpack_require__("../../../../../src/app/components/pages/firms/firms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_pages_product_product_component__ = __webpack_require__("../../../../../src/app/components/pages/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_pages_products_products_component__ = __webpack_require__("../../../../../src/app/components/pages/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_pages_fp_combo_fp_combo_component__ = __webpack_require__("../../../../../src/app/components/pages/fp-combo/fp-combo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_pages_search_results_search_results_component__ = __webpack_require__("../../../../../src/app/components/pages/search-results/search-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ng2_google_charts__ = __webpack_require__("../../../../ng2-google-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_charts_views_by_type_pie_views_by_type_pie_component__ = __webpack_require__("../../../../../src/app/components/charts/views-by-type-pie/views-by-type-pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_charts_views_by_country_pie_views_by_country_pie_component__ = __webpack_require__("../../../../../src/app/components/charts/views-by-country-pie/views-by-country-pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_charts_product_views_by_type_pie_product_views_by_type_pie_component__ = __webpack_require__("../../../../../src/app/components/charts/product-views-by-type-pie/product-views-by-type-pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_charts_product_views_by_firm_pie_product_views_by_firm_pie_component__ = __webpack_require__("../../../../../src/app/components/charts/product-views-by-firm-pie/product-views-by-firm-pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_view_toggle_view_toggle_component__ = __webpack_require__("../../../../../src/app/components/view-toggle/view-toggle.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//modules









//services


//auth services




//components

//ui components


//tables










//page layouts








//charts







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_navbar_navbar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_pages_landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_tables_dashboard_tables_dashboard_top_products_table_dashboard_top_products_table_component__["a" /* DashboardTopProductsTableComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_tables_dashboard_tables_dashboard_views_by_firm_table_dashboard_views_by_firm_table_component__["a" /* DashboardViewsByFirmTableComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_pages_firm_firm_component__["a" /* FirmComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_pages_firms_firms_component__["a" /* FirmsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_tables_firm_actions_table_firm_actions_table_component__["a" /* FirmActionsTableComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_tables_firm_views_table_firm_views_table_component__["a" /* FirmViewsTableComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_pages_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_pages_products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_tables_product_actions_table_product_actions_table_component__["a" /* ProductActionsTableComponent */],
                __WEBPACK_IMPORTED_MODULE_14__callback_callback_component__["a" /* CallbackComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_page_title_page_title_component__["a" /* PageTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_tables_product_firms_table_product_firms_table_component__["a" /* ProductFirmsTableComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_pages_fp_combo_fp_combo_component__["a" /* FpComboComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_tables_fp_combo_table_fp_combo_table_component__["a" /* FpComboTableComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_pages_search_results_search_results_component__["a" /* SearchResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_tables_search_results_table_search_results_table_component__["a" /* SearchResultsTableComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_tables_products_table_products_table_component__["a" /* ProductsTableComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_tables_firms_table_firms_table_component__["a" /* FirmsTableComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_charts_views_by_type_pie_views_by_type_pie_component__["a" /* ViewsByTypePieComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_charts_views_by_country_pie_views_by_country_pie_component__["a" /* ViewsByCountryPieComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_charts_product_views_by_type_pie_product_views_by_type_pie_component__["a" /* ProductViewsByTypePieComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_charts_product_views_by_firm_pie_product_views_by_firm_pie_component__["a" /* ProductViewsByFirmPieComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_view_toggle_view_toggle_component__["a" /* ViewToggleComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_36_ng2_google_charts__["a" /* Ng2GoogleChartsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__material_material_module__["a" /* MaterialModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_products_get_product_info_by_ticker_service__["a" /* GetProductInfoByTickerService */],
                __WEBPACK_IMPORTED_MODULE_9__services_firms_get_firm_info_by_id_service__["a" /* GetFirmInfoByIdService */],
                __WEBPACK_IMPORTED_MODULE_11__auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_12__auth_auth_guard_service__["a" /* AuthGuardService */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_13__auth_auth_interceptor_service__["a" /* AuthInterceptorService */], multi: true }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthInterceptorService = (function () {
    function AuthInterceptorService() {
    }
    /**
     * Clone the request and add the authorization header.
     */
    AuthInterceptorService.prototype.intercept = function (req, next) {
        // req = req.clone({
        //     setHeaders: {
        //         Authorization: `Bearer ${localStorage.getItem('access_token')}`
        //     }
        // });
        return next.handle(req);
    };
    AuthInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthInterceptorService);
    return AuthInterceptorService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth0_variables__ = __webpack_require__("../../../../../src/app/auth/auth0-variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
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
                    scope: 'openid profile app_metadata'
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
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.lock.on('authenticated', function (authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                console.log(authResult);
                //get the role and assign permissions
                /*
                try {
                    let role = authResult.idTokenPayload[`https://${AUTH_CONFIG.domain}/app_metadata`].role;
                    if (role === 'superuser') {
                        this.enableSuperUser();
                        this.setDataFilter('professional');
                        this.setSession(authResult);
                        this.router.navigate(['/dashboard']);
                    } else if (role === 'professional') {
                        this.setDataFilter('professional');
                        this.setSession(authResult);
                        this.router.navigate(['/dashboard']);
                    } else if (role === 'student') {
                        this.setDataFilter('student');
                        this.setSession(authResult);
                        this.router.navigate(['/dashboard']);
                    } else {
                        this.enableSuperUser();
                        this.setDataFilter('professional');
                        this.setSession(authResult);
                        //navigate to dash
                        this.router.navigate(['/dashboard']);
                        // if no role is found, do not proceed with authentication
                        this.router.navigate(['/']);
                    }
                } catch (err) {
                    console.log(err);
                    this.router.navigate(['/']);
                }*/
                //for demo (no roles)
                _this.enableSuperUser();
                _this.setDataFilter('professional');
                _this.setSession(authResult);
                //navigate to dash
                _this.router.navigate(['/dashboard']);
            }
        });
        this.lock.on('authorization_error', function (err) {
            alert("Error: " + err.error + ". Check the console for further details.");
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 2000) + new Date().getTime());
        //const expiresAt = JSON.stringify(10) + new Date().getTime();
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Remove permissions and data filter
        localStorage.removeItem('data_filter');
        localStorage.removeItem('is_super_user');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.clearRedirect = function () {
        // Remove redirect from localStorage
        localStorage.removeItem('authRedirect');
    };
    //getters & setters
    AuthService.prototype.getDataFilter = function () {
        return localStorage.getItem('data_filter');
    };
    AuthService.prototype.setDataFilter = function (dataFilter) {
        localStorage.setItem('data_filter', dataFilter);
    };
    AuthService.prototype.enableSuperUser = function () {
        localStorage.setItem('is_super_user', 'true');
    };
    AuthService.prototype.getIsSuperUser = function () {
        return localStorage.getItem('is_super_user');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth0-variables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_CONFIG; });
var AUTH_CONFIG = {
    clientID: 'JVWTl27ibH780mxnd7atqxwqO3wQgei5',
    domain: 'etfs.auth0.com',
    callbackURL: 'https://etfg.herokuapp.com/callback',
};


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    CallbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'callback',
            template: __webpack_require__("../../../../../src/app/callback/callback.component.html"),
            styles: [__webpack_require__("../../../../../src/app/callback/callback.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/charts/product-views-by-firm-pie/product-views-by-firm-pie.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='header'>\n    <h6>Views By Firm</h6>                \n</div>\n<div class='pie-container'>\n    <google-chart [data]=\"pieChartData\"></google-chart>        \n</div>\n    \n    "

/***/ }),

/***/ "../../../../../src/app/components/charts/product-views-by-firm-pie/product-views-by-firm-pie.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pie-container {\n  position: relative;\n  width: 345px;\n  font-size: 10px;\n  font-weight: 500;\n  margin: auto; }\n\n.header {\n  min-height: 2em;\n  line-height: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: inherit;\n    margin: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/charts/product-views-by-firm-pie/product-views-by-firm-pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductViewsByFirmPieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductViewsByFirmPieComponent = (function () {
    function ProductViewsByFirmPieComponent(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    ProductViewsByFirmPieComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.getData(this.ticker).subscribe(function (data) {
            var dataTable = [];
            dataTable.push(['Type', 'Views']);
            data.forEach(function (element) {
                dataTable.push([element.label, element.value]);
            });
            _this.pieChartData = {
                chartType: 'PieChart',
                dataTable: dataTable,
                options: {
                    height: '250',
                    width: '345',
                    chartArea: {
                        left: 10,
                        top: 0,
                        width: '90%',
                        height: '90%'
                    },
                    legend: { alignment: 'center' },
                    sliceVisibilityThreshold: 0.02
                },
            };
        });
    };
    ProductViewsByFirmPieComponent.prototype.getData = function (ticker) {
        var requestUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + "/api/viewsbyfirm/" + ticker + "?datafilter=" + this.auth.getDataFilter();
        return this.http.get(requestUrl);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ProductViewsByFirmPieComponent.prototype, "ticker", void 0);
    ProductViewsByFirmPieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'product-views-by-firm-pie',
            template: __webpack_require__("../../../../../src/app/components/charts/product-views-by-firm-pie/product-views-by-firm-pie.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/charts/product-views-by-firm-pie/product-views-by-firm-pie.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]])
    ], ProductViewsByFirmPieComponent);
    return ProductViewsByFirmPieComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/charts/product-views-by-type-pie/product-views-by-type-pie.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='header'>\n    <h6>Views By Type</h6>                \n</div>\n<div class='pie-container'>\n    <google-chart [data]=\"pieChartData\"></google-chart>        \n</div>\n\n    "

/***/ }),

/***/ "../../../../../src/app/components/charts/product-views-by-type-pie/product-views-by-type-pie.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pie-container {\n  position: relative;\n  width: 345px;\n  font-size: 10px;\n  font-weight: 500;\n  margin: auto; }\n\n.header {\n  min-height: 2em;\n  line-height: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: inherit;\n    margin: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/charts/product-views-by-type-pie/product-views-by-type-pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductViewsByTypePieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductViewsByTypePieComponent = (function () {
    function ProductViewsByTypePieComponent(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    ProductViewsByTypePieComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.getData(this.ticker).subscribe(function (data) {
            var dataTable = [];
            dataTable.push(['Type', 'Views']);
            data.forEach(function (element) {
                dataTable.push([element.label, element.value]);
            });
            _this.pieChartData = {
                chartType: 'PieChart',
                dataTable: dataTable,
                options: {
                    height: '250',
                    width: '345',
                    chartArea: {
                        left: 10,
                        top: 0,
                        width: '90%',
                        height: '90%'
                    },
                    legend: { alignment: 'center' },
                },
            };
        });
    };
    ProductViewsByTypePieComponent.prototype.getData = function (ticker) {
        var requestUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + "/api/viewsbytype/" + ticker + "?datafilter=" + this.auth.getDataFilter();
        return this.http.get(requestUrl);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ProductViewsByTypePieComponent.prototype, "ticker", void 0);
    ProductViewsByTypePieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'product-views-by-type-pie',
            template: __webpack_require__("../../../../../src/app/components/charts/product-views-by-type-pie/product-views-by-type-pie.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/charts/product-views-by-type-pie/product-views-by-type-pie.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]])
    ], ProductViewsByTypePieComponent);
    return ProductViewsByTypePieComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/charts/views-by-country-pie/views-by-country-pie.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='header'>\n    <h6>Views By Country</h6>                \n</div>\n<div class='pie-container'>\n    <google-chart [data]=\"pieChartData\"></google-chart>        \n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/charts/views-by-country-pie/views-by-country-pie.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pie-container {\n  position: relative;\n  width: 345px;\n  font-size: 10px;\n  font-weight: 500;\n  margin: auto; }\n\n.header {\n  min-height: 2em;\n  line-height: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: inherit;\n    margin: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/charts/views-by-country-pie/views-by-country-pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewsByCountryPieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewsByCountryPieComponent = (function () {
    function ViewsByCountryPieComponent(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    ViewsByCountryPieComponent.prototype.getData = function () {
        var requestUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + "/api/viewsbycountry?datafilter=" + this.auth.getDataFilter();
        return this.http.get(requestUrl);
    };
    ViewsByCountryPieComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.getData().subscribe(function (data) {
            var dataTable = [];
            dataTable.push(['Country', 'Views']);
            data.forEach(function (element) {
                dataTable.push([element.label, element.value]);
            });
            _this.pieChartData = {
                chartType: 'PieChart',
                dataTable: dataTable,
                options: {
                    height: '250',
                    width: '345',
                    chartArea: {
                        left: 10,
                        top: 0,
                        width: '90%',
                        height: '90%'
                    },
                    legend: { alignment: 'center' },
                    sliceVisibilityThreshold: 0.01
                },
            };
        });
    };
    ViewsByCountryPieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'views-by-country-pie',
            template: __webpack_require__("../../../../../src/app/components/charts/views-by-country-pie/views-by-country-pie.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/charts/views-by-country-pie/views-by-country-pie.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]])
    ], ViewsByCountryPieComponent);
    return ViewsByCountryPieComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/charts/views-by-type-pie/views-by-type-pie.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='header'>\n    <h6>Views By Type</h6>\n</div>\n<div class='pie-container'>\n    <google-chart [data]=\"pieChartData\"></google-chart>        \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/charts/views-by-type-pie/views-by-type-pie.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pie-container {\n  position: relative;\n  width: 345px;\n  font-size: 10px;\n  font-weight: 500;\n  margin: auto; }\n\n.header {\n  min-height: 2em;\n  line-height: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: inherit;\n    margin: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/charts/views-by-type-pie/views-by-type-pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewsByTypePieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewsByTypePieComponent = (function () {
    function ViewsByTypePieComponent(ref, http, auth) {
        this.ref = ref;
        this.http = http;
        this.auth = auth;
    }
    ViewsByTypePieComponent.prototype.ngAfterViewInit = function () {
        this.loadChartData();
    };
    ViewsByTypePieComponent.prototype.loadChartData = function () {
        var _this = this;
        this.getData().subscribe(function (data) {
            var dataTable = [];
            dataTable.push(['Type', 'Count']);
            data.forEach(function (element) {
                dataTable.push([element.label, element.value]);
            });
            _this.pieChartData = {
                chartType: 'PieChart',
                dataTable: dataTable,
                options: {
                    height: '250',
                    width: '345',
                    chartArea: {
                        left: 10,
                        top: 0,
                        width: '90%',
                        height: '90%'
                    },
                    legend: { alignment: 'center' },
                },
            };
        });
    };
    ViewsByTypePieComponent.prototype.getData = function () {
        var requestUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiBaseUrl + "/api/viewsbytype?datafilter=" + this.auth.getDataFilter();
        return this.http.get(requestUrl);
    };
    ViewsByTypePieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'views-by-type-pie',
            template: __webpack_require__("../../../../../src/app/components/charts/views-by-type-pie/views-by-type-pie.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/charts/views-by-type-pie/views-by-type-pie.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]])
    ], ViewsByTypePieComponent);
    return ViewsByTypePieComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: "\n    <div class='footer'>\n        <a class='footer-link' href='http://etfg.com/about'>About Us</a>\n        |\n        <a class='footer-link' href='http://etfg.com'>Main Website</a>\n        <hr>\n        <span class='footer-link'> Designed By <a href='http://vedia.nyc'>Vedia NYC</a></span>\n    <div>",
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n    <!-- Hamburger -->\n    <button mat-mini-fab color=\"warn\" *ngIf=\"auth.isAuthenticated()\" class=\"navbar-toggler navbar-toggler-right float-right orange-background\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <mat-icon>menu</mat-icon>\n    </button>\n    <!-- Logo link to home -->\n    <div *ngIf=\"!auth.isAuthenticated()\">\n        <a class=\"navbar-brand\" [routerLink]=\"['/']\">\n            <img src=\"../../../assets/logos/logo.png\" alt=\"ETF Global Logo\">                  \n            <br>\n            <span class=\"logoText\">Business Intelligence</span>\n        </a>\n    </div>\n    <!-- Logo link to dashboard -->\n    <div *ngIf=\"auth.isAuthenticated()\">\n        <a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\">\n            <img src=\"../../../assets/logos/logo.png\" alt=\"ETF Global Logo\">\n            <br>\n            <span class=\"logoText\">Business Intelligence</span>\n        </a>\n    </div>\n    <!-- Nav Links -->\n    <div *ngIf=\"auth.isAuthenticated()\" class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n                <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n            </li>\n            <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n                <a class=\"nav-link\" [routerLink]=\"['/products']\">Products</a>\n            </li>\n            <!--\n            <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n                <a class=\"nav-link\" [routerLink]=\"['/assetclasses']\">Asset Classes</a>\n            </li>\n            <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n                <a class=\"nav-link\" [routerLink]=\"['/issuers']\">Issuers</a>\n            </li> -->\n            <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n                <a class=\"nav-link\" [routerLink]=\"['/firms']\">Firms</a>\n            </li>\n            <!--\n            <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n                <a class=\"nav-link\" [routerLink]=\"['/countries']\">Countries</a>\n            </li>\n            -->\n        </ul>\n        <!-- Search -->\n        <form class=\"form-inline my-2 my-lg-0 float-left\" [formGroup]=\"searchForm\" (ngSubmit)=\"handleSearch($event)\">\n            <input formControlName=\"term\" class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search...\">\n            <button class=\"btn btn-primary fa fa-search orange-background\" type=\"submit\"></button>\n        </form>\n        <!-- Log Out Button -->\n        <div class=\"button-row float-right\">\n            <button mat-raised-button class=\"auth-button\" *ngIf=\"auth.isAuthenticated()\" (click)=\"auth.logout()\">Log Out</button>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  cursor: pointer;\n  border: none !important;\n  outline: none !important; }\n\nform input {\n  border-radius: 2px;\n  padding-left: 5px !important;\n  font-family: inherit;\n  font-weight: lighter; }\n  form input::-webkit-input-placeholder {\n    color: #aaa; }\n  form input:-ms-input-placeholder {\n    color: #aaa; }\n  form input::placeholder {\n    color: #aaa; }\n\nform button {\n  height: 36px;\n  margin-top: -2px;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n  form button:hover {\n    box-shadow: 0px 0px 5px 1px #777 !important; }\n\na.navbar-brand {\n  margin-left: none; }\n\na.navbar-brand > img {\n  height: 1.5em; }\n\n.logoText {\n  font-size: .8em; }\n\nnav {\n  position: fixed;\n  width: 100vw;\n  z-index: 1000;\n  padding-right: 20px; }\n\n.button-row.float-right {\n  margin-left: auto !important; }\n\nnav.navbar.navbar-toggleable-md.navbar-light.bg-faded {\n  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75); }\n\n@media (min-width: 991px) {\n  form.form-inline.my-2.my-lg-0.ng-untouched.ng-pristine.ng-valid {\n    padding-right: 4em; } }\n\n@media (max-width: 991px) {\n  .navbar-toggleable-md .navbar-nav .dropdown-menu {\n    position: absolute;\n    float: none; }\n  div#navbarSupportedContent {\n    margin-top: 1.3em; }\n  a.navbar-brand {\n    width: 50%; }\n  button.navbar-toggler.navbar-toggler-right.float-right.mat-mini-fab.mat-warn {\n    float: right;\n    position: absolute;\n    top: 1em;\n    color: white; }\n  form.form-inline.my-2.my-lg-0.float-right.ng-untouched.ng-pristine.ng-valid {\n    position: relative;\n    float: left !important;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap; }\n  button.btn.btn-primary.fa.fa-search {\n    margin-left: .5em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
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
            term: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required]
        });
        this.handleSearch = function (event) {
            _this.router.navigateByUrl("/search/" + _this.searchForm.controls.term.value);
            _this.searchForm.reset();
        };
        auth.handleAuthentication();
    }
    NavBarComponent.prototype.isLanding = function () {
        return this.router.url.includes('home') || this.router.url === '/';
    };
    NavBarComponent.prototype.ngOnInit = function () {
        if (this.auth.isAuthenticated() && !this.isLanding()) {
            this.auth.login();
        }
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page-title/page-title.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row.bg-primary {\n  margin-bottom: 0em; }\n\n.text-center.title {\n  color: #fff;\n  padding-top: 1.2em;\n  padding-bottom: 1.2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-title/page-title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], PageTitleComponent.prototype, "title", void 0);
    PageTitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-title',
            template: "\n    <div class=\"row bg-primary\">\n        <div class=\"col-md-12 orange-background\">\n            <h1 style=\"white-space: pre;\" class=\"text-center title\">{{title}}</h1>\n        </div>\n    </div>",
            styles: [__webpack_require__("../../../../../src/app/components/page-title/page-title.component.scss")],
        })
    ], PageTitleComponent);
    return PageTitleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <page-title title=\"Dashboard\"></page-title>\n    <div class=\"row justify-content-around view-toggle-container\">\n        <div class=\"col-md-12\">\n            <view-toggle [(dataFilter)]=\"dataFilter\"></view-toggle>\n        </div>\n    </div>\n    <div class=\"row justify-content-around\">\n        <div class=\"col-md-6\">\n            <div class=\"mat-elevation-z4\">\n                <views-by-type-pie *ngIf=\"dataFilter==='student'\"></views-by-type-pie>\n                <views-by-type-pie *ngIf=\"dataFilter==='professional'\"></views-by-type-pie>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"mat-elevation-z4\">\n                <views-by-country-pie *ngIf=\"dataFilter==='student'\"></views-by-country-pie>\n                <views-by-country-pie *ngIf=\"dataFilter==='professional'\" ></views-by-country-pie>\n            </div>\n        </div>\n    </div>\n    <div class=\"row justify-content-around\">\n        <div class=\"col-md-6\">\n            <dashboard-top-products-table *ngIf=\"dataFilter==='student'\"></dashboard-top-products-table>\n            <dashboard-top-products-table *ngIf=\"dataFilter==='professional'\"></dashboard-top-products-table>\n        </div>\n        <div class=\"col-md-6\">\n            <dashboard-views-by-firm-table  *ngIf=\"dataFilter==='student'\"></dashboard-views-by-firm-table>\n            <dashboard-views-by-firm-table  *ngIf=\"dataFilter==='professional'\"></dashboard-views-by-firm-table>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/pages/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row.view-toggle-container {\n  margin-top: 2em;\n  margin-bottom: 2em; }\n\n.text-center.title {\n  color: #fff;\n  padding-top: 1.2em;\n  padding-bottom: 1.2em;\n  width: 100%; }\n\n.header {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.mat-form-field {\n  font-size: 14px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-left: 32px; }\n\n.col-md-6, .col-md-4 {\n  margin-bottom: 2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
        this.auth = auth;
        this.dataFilter = this.auth.getDataFilter();
    }
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dashboard',
            template: __webpack_require__("../../../../../src/app/components/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/firm/firm.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <page-title [title]=\"pageTitle\"></page-title>\n  <div class=\"row justify-content-around tables-container\">\n    <!--<div class=\"col-md-12\">\n      <div class=\"mat-elevation-z4 info\">\n        <div>\n            <h6>Issuer: <span>{{data.issuer}}</span></h6>\n            <h6>Asset Class: <span>{{data.asset_class}}</span></h6>\n            <h6>Development Class: <span>{{data.development_class}}</span></h6>\n            <h6>Category: <span>{{data.category}}</span></h6>\n        </div> \n        <div>\n            <h6>Region: <span>{{data.region}}</span></h6>              \n            <h6>Sub-Region: <span>{{data.sub_region}}</span></h6>\n            <h6>Total Views: <span>{{data.view_count}}</span></h6>\n            <h6>Last updated: <span>{{data.updated_at}}</span></h6>\n        </div>\n      </div>\n    </div>-->\n    <div class=\"col-md-12\">\n        <firm-views-table [firmId]=\"firmId\"></firm-views-table>\n    </div>\n    <div class=\"col-md-12\">\n        <firm-actions-table [firmId]=\"firmId\"></firm-actions-table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/firm/firm.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-md-6, .col-md-12 {\n  margin-top: 2em; }\n\n.info {\n  padding-top: 10px; }\n  .info div {\n    height: 120px;\n    font-family: inherit;\n    padding-left: 24px;\n    box-sizing: border-box; }\n    .info div h6 {\n      height: 30px;\n      margin: 0px; }\n      .info div h6 span {\n        font-weight: normal;\n        color: #777; }\n\n@media (min-width: 768px) {\n  .info div {\n    display: inline-block;\n    width: 49%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/firm/firm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firms_get_firm_info_by_id_service__ = __webpack_require__("../../../../../src/app/services/firms/get-firm-info-by-id.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
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
    function FirmComponent(route, service, auth, router) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.auth = auth;
        this.router = router;
        document.title = 'ETFG';
        this.route.params.subscribe(function (params) { return _this.firmId = params.id; });
        this.subscription = this.service.getInfoById(this.firmId).subscribe(function (response) {
            var data = response.json();
            //reject users with wrong permissions
            if (!_this.auth.getIsSuperUser()) {
                if ((_this.auth.getDataFilter() === 'student' && data.type === 0) || (_this.auth.getDataFilter() === 'professional' && data.type === 1)) {
                    _this.router.navigate(['/dashboard']);
                }
            }
            _this.data = data;
            _this.pageTitle = data.name;
            document.title = "ETFG | " + data.name;
        });
    }
    FirmComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    FirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'firm',
            template: __webpack_require__("../../../../../src/app/components/pages/firm/firm.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/firm/firm.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_firms_get_firm_info_by_id_service__["a" /* GetFirmInfoByIdService */], __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], FirmComponent);
    return FirmComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/firms/firms.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row.bg-primary {\n  margin-bottom: 3.125em; }\n\n.text-center.title {\n  color: #fff;\n  padding-top: 1.2em;\n  padding-bottom: 1.2em;\n  width: 100vw; }\n\n.col-md-12 {\n  margin-top: 2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/firms/firms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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


var FirmsComponent = (function () {
    function FirmsComponent(auth) {
        this.auth = auth;
        this.dataFilter = this.auth.getDataFilter();
    }
    FirmsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'firms-page',
            template: "\n    <div class=\"container-fluid\">\n        <page-title title=\"Firms\"></page-title>\n        <div class=\"row justify-content-around\">\n            <div class=\"col-md-12\">\n                <view-toggle [(dataFilter)]=\"dataFilter\"></view-toggle>\n            </div>\n            <div class=\"col-md-12\">\n                <firms-table *ngIf=\"dataFilter === 'student'\"></firms-table>\n                <firms-table *ngIf=\"dataFilter === 'professional'\"></firms-table>\n            </div>\n        </div>\n        </div>",
            styles: [__webpack_require__("../../../../../src/app/components/pages/firms/firms.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], FirmsComponent);
    return FirmsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/fp-combo/fp-combo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <page-title [title]=\"pageTitle\"></page-title>\n  <div *ngIf=\"productData\" class=\"row justify-content-around tables-container\">\n    <div class=\"col-md-12\">\n      <div class=\"mat-elevation-z4 info\">\n        <div>\n            <h6>Issuer: <span>{{productData.issuer}}</span></h6>\n            <h6>Asset Class: <span>{{productData.asset_class}}</span></h6>\n            <h6>Development Class: <span>{{productData.development_class}}</span></h6>\n            <h6>Category: <span>{{productData.category}}</span></h6>\n        </div> \n        <div>\n            <h6>Region: <span>{{productData.region}}</span></h6>              \n            <h6>Sub-Region: <span>{{productData.sub_region}}</span></h6>\n            <h6>Total Views: <span>{{productData.view_count}}</span></h6>\n            <h6>Last Updated: <span>{{productData.updated_at}}</span></h6>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <fp-combo-table [firmId]=\"firmId\" [ticker]=\"ticker\"></fp-combo-table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/fp-combo/fp-combo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-md-6, .col-md-12 {\n  margin-top: 2em; }\n\n.info {\n  padding-top: 10px; }\n  .info div {\n    height: 120px;\n    font-family: inherit;\n    padding-left: 24px;\n    box-sizing: border-box; }\n    .info div h6 {\n      height: 30px;\n      margin: 0px; }\n      .info div h6 span {\n        font-weight: normal;\n        color: #777; }\n\n@media (min-width: 768px) {\n  .info div {\n    display: inline-block;\n    width: 49%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/fp-combo/fp-combo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FpComboComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firms_get_firm_info_by_id_service__ = __webpack_require__("../../../../../src/app/services/firms/get-firm-info-by-id.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_products_get_product_info_by_ticker_service__ = __webpack_require__("../../../../../src/app/services/products/get-product-info-by-ticker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
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
    function FpComboComponent(auth, router, route, productService, firmService) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.productService = productService;
        this.firmService = firmService;
        document.title = 'ETFG';
        this.route.params.subscribe(function (params) {
            _this.firmId = params.id;
            _this.ticker = params.ticker;
        });
        this.firmSubscription = this.firmService.getInfoById(this.firmId).subscribe(function (response) {
            var data = response.json();
            _this.firmData = data;
            //reject users with wrong permissions
            if (!_this.auth.getIsSuperUser()) {
                if ((_this.auth.getDataFilter() === 'student' && data.type === 0) || (_this.auth.getDataFilter() === 'professional' && data.type === 1)) {
                    _this.router.navigate(['/dashboard']);
                }
            }
            if (_this.pageTitle) {
                _this.pageTitle = _this.pageTitle.concat("\n\n" + (" " + data.name));
            }
            else {
                _this.pageTitle = "" + data.name;
            }
            document.title = "ETFG | " + data.name;
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
    }
    FpComboComponent.prototype.ngOnDestroy = function () {
        this.firmSubscription.unsubscribe();
        this.productSubscription.unsubscribe();
    };
    FpComboComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fp-combo',
            template: __webpack_require__("../../../../../src/app/components/pages/fp-combo/fp-combo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/fp-combo/fp-combo.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_products_get_product_info_by_ticker_service__["a" /* GetProductInfoByTickerService */], __WEBPACK_IMPORTED_MODULE_2__services_firms_get_firm_info_by_id_service__["a" /* GetFirmInfoByIdService */]])
    ], FpComboComponent);
    return FpComboComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron-container {\n  position: fixed;\n  width: 100%;\n  top: 140px;\n  text-align: center; }\n\n.jumbotron {\n  position: relative;\n  margin: auto;\n  border-radius: 0px;\n  box-shadow: none;\n  width: 100%;\n  transition: padding 0.3s, width 0.3s, background-color 0.3s, box-shadow 0.3s;\n  background-color: white; }\n  .jumbotron button {\n    margin: 5px 0px 10px 0px; }\n\n@media (min-width: 500px) {\n  .jumbotron {\n    width: 500px;\n    background-color: #f7f7f7;\n    box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'landing',
            template: "\n        <div *ngIf=\"!auth.isAuthenticated()\" class=\"text-center\">\n            <div class=\"jumbotron-container\">\n                <div class=\"jumbotron\">\n                    <h1 class=\"display-3\">Welcome</h1>\n                    <p class=\"lead\">Please log in or register to continue to the dashboard.</p>\n                    <hr class=\"my-4\">\n                    <button mat-raised-button (click)=\"auth.login()\" class=\"auth-button\">Log In</button>\n                    <button mat-raised-button (click)=\"auth.signup()\" class=\"auth-button\">Sign Up</button>\n                </div>\n            </div>\n        </div>",
            styles: [__webpack_require__("../../../../../src/app/components/pages/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <page-title [title]=\"pageTitle\"></page-title>\n    <div class=\"row justify-content-around tables-container\">\n        <div class=\"col-md-12\">\n            <div class=\"mat-elevation-z4 info\" *ngIf=\"data\">\n                <div>\n                    <h6>Issuer: <span>{{data.issuer}}</span></h6>\n                    <h6>Asset Class: <span>{{data.asset_class}}</span></h6>\n                    <h6>Development Class: <span>{{data.development_class}}</span></h6>\n                    <h6>Category: <span>{{data.category}}</span></h6>\n                </div> \n                <div>\n                    <h6>Region: <span>{{data.region}}</span></h6>       \n                    <h6>Sub-Region: <span>{{data.sub_region}}</span></h6>\n                    <h6>Total Views: <span>{{data.view_count}}</span></h6>\n                    <h6>Last Updated: <span>{{data.updated_at}}</span></h6>\n                </div>\n            </div>\n        </div>\n        <div class='col-md-12'>\n            <view-toggle [(dataFilter)]=\"dataFilter\"></view-toggle>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"mat-elevation-z4\">\n                <product-views-by-type-pie *ngIf=\"dataFilter === 'student'\" [ticker]=\"ticker\"></product-views-by-type-pie>\n                <product-views-by-type-pie *ngIf=\"dataFilter === 'professional'\" [ticker]=\"ticker\"></product-views-by-type-pie>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"mat-elevation-z4\">\n                <product-views-by-firm-pie *ngIf=\"dataFilter === 'student'\" [ticker]=\"ticker\"></product-views-by-firm-pie>\n                <product-views-by-firm-pie *ngIf=\"dataFilter === 'professional'\" [ticker]=\"ticker\"></product-views-by-firm-pie>\n            </div>              \n        </div>\n        <div class=\"col-md-12\">\n            <product-firms-table *ngIf=\"dataFilter === 'student'\" [ticker]=\"ticker\"></product-firms-table>\n            <product-firms-table *ngIf=\"dataFilter === 'professional'\" [ticker]=\"ticker\"></product-firms-table>\n        </div>\n        <div class=\"col-md-12\">\n            <product-actions-table *ngIf=\"dataFilter === 'student'\" [ticker]=\"ticker\"></product-actions-table>\n            <product-actions-table *ngIf=\"dataFilter === 'professional'\" [ticker]=\"ticker\"></product-actions-table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/product/product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row.bg-primary {\n  margin-bottom: 3.125em; }\n\n.text-center.title {\n  color: #fff;\n  padding-top: 1.2em;\n  padding-bottom: 1.2em;\n  width: 100%; }\n\n.tables-container {\n  margin-top: -20px; }\n\n.col-md-6, .col-md-12 {\n  margin-bottom: 2em; }\n\n.info {\n  margin-top: 3.25em;\n  padding-top: 10px; }\n  .info div {\n    height: 120px;\n    font-family: inherit;\n    padding-left: 24px;\n    box-sizing: border-box; }\n    .info div h6 {\n      height: 30px;\n      margin: 0px; }\n      .info div h6 span {\n        font-weight: normal;\n        color: #777; }\n\n@media (min-width: 768px) {\n  .info div {\n    display: inline-block;\n    width: 49%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_get_product_info_by_ticker_service__ = __webpack_require__("../../../../../src/app/services/products/get-product-info-by-ticker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
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
    function ProductComponent(route, service, auth) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.auth = auth;
        this.dataFilter = this.auth.getDataFilter();
        document.title = 'ETFG';
        this.route.params.subscribe(function (params) { return _this.ticker = params.ticker; });
        this.subscription = this.service.getInfoByTicker(this.ticker).subscribe(function (response) {
            var data = response.json();
            _this.data = data;
            _this.pageTitle = data.ticker + " - " + data.name;
            document.title = "ETFG | " + data.ticker;
        });
    }
    ProductComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'product',
            template: __webpack_require__("../../../../../src/app/components/pages/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_products_get_product_info_by_ticker_service__["a" /* GetProductInfoByTickerService */], __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/products/products.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row.bg-primary {\n  margin-bottom: 3.125em; }\n\n.text-center.title {\n  color: #fff;\n  padding-top: 1.2em;\n  padding-bottom: 1.2em;\n  width: 100vw; }\n\n.col-md-12 {\n  margin-top: 2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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


var ProductsComponent = (function () {
    function ProductsComponent(auth) {
        this.auth = auth;
        this.dataFilter = this.auth.getDataFilter();
    }
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'products-page',
            template: "\n    <div class=\"container-fluid\">\n        <page-title title=\"Products\"></page-title>\n        <div class=\"row justify-content-around\">\n            <!--<div class=\"col-md-12\">\n                <view-toggle [(dataFilter)]=\"dataFilter\"></view-toggle>\n            </div>-->\n            <div class=\"col-md-12\">\n                <products-table *ngIf=\"dataFilter === 'student'\"></products-table>\n                <products-table *ngIf=\"dataFilter === 'professional'\"></products-table>                     \n            </div>\n        </div>\n    </div>",
            styles: [__webpack_require__("../../../../../src/app/components/pages/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/search-results/search-results.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <page-title [title]=\"pageTitle\"></page-title>\n    <div class=\"row justify-content-around\">\n        <div class='col-md-12'>\n            <view-toggle [(dataFilter)]=\"dataFilter\"></view-toggle>\n        </div>\n        <div class=\"col-md-12\">\n            <search-results-table *ngIf=\"dataFilter=='student'\"></search-results-table>\n            <search-results-table *ngIf=\"dataFilter=='professional'\"></search-results-table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/search-results/search-results.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row.bg-primary {\n  margin-bottom: 3.125em; }\n\n.text-center.title {\n  color: #fff;\n  padding-top: 1.2em;\n  padding-bottom: 1.2em;\n  width: 100%; }\n\n.col-md-6, .col-md-12 {\n  margin-top: 2em; }\n\n.info {\n  padding-top: 10px; }\n  .info div {\n    height: 120px;\n    font-family: inherit;\n    padding-left: 24px;\n    box-sizing: border-box; }\n    .info div h6 {\n      height: 30px;\n      margin: 0px; }\n      .info div h6 span {\n        font-weight: normal;\n        color: #777; }\n\n@media (min-width: 768px) {\n  .info div {\n    display: inline-block;\n    width: 49%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/search-results/search-results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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


var SearchResultsComponent = (function () {
    function SearchResultsComponent(auth) {
        this.auth = auth;
        this.pageTitle = 'Search';
        this.dataFilter = this.auth.getDataFilter();
        document.title = 'ETFG | Search';
    }
    SearchResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-results',
            template: __webpack_require__("../../../../../src/app/components/pages/search-results/search-results.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/search-results/search-results.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tables/dashboard-tables/dashboard-top-products-table/dashboard-top-products-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-container mat-elevation-z4\">\n    <!-- Header -->\n    <div class=\"header\">\n        <h6>Top Products</h6>   \n    </div>\n    <!-- Loading Shade -->\n    <div class=\"loading-shade\" *ngIf=\"isLoadingResults\"></div>\n    <mat-table #table [dataSource]=\"dataSource\" matSort matSortActive=\"views\" matSortDisableClear matSortDirection=\"desc\">\n        <!-- Ticker Column -->\n        <ng-container matColumnDef=\"ticker\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Ticker </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/products/', row.ticker]\">{{row.ticker}}</a></mat-cell>\n        </ng-container>\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/products/', row.ticker]\">{{row.name}}</a></mat-cell>\n        </ng-container>\n        <!-- Issuer Column -->\n        <ng-container matColumnDef=\"issuer\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Issuer </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">{{row.issuer}}</mat-cell>\n        </ng-container>\n        <!-- Views Column -->\n        <ng-container matColumnDef=\"views\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Views </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.views}} </mat-cell>\n        </ng-container>\n        <!-- Row Headers -->\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <!-- Paginator -->\n    <mat-paginator [length]=\"resultsLength\" [pageSize]=\"20\"></mat-paginator>\n</div>     \n"

/***/ }),

/***/ "../../../../../src/app/components/tables/dashboard-tables/dashboard-top-products-table/dashboard-top-products-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  min-height: 2em;\n  line-height: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: inherit;\n    margin: 0px; }\n\n.table-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n  position: relative; }\n\n.mat-table {\n  overflow: auto; }\n\n.mat-header-cell .mat-sort-header-sorted {\n  color: black; }\n\n.loading-shade {\n  position: absolute;\n  top: 0px;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.mat-column-views {\n  min-width: 64px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/dashboard-tables/dashboard-top-products-table/dashboard-top-products-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardTopProductsTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__ = __webpack_require__("../../../../rxjs/_esm5/operators/catchError.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DashboardTopProductsTableComponent = (function () {
    function DashboardTopProductsTableComponent(http, auth) {
        this.http = http;
        this.auth = auth;
        this.displayedColumns = ['ticker', 'name', 'views'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatTableDataSource */]();
        this.resultsLength = 0;
        this.isLoadingResults = false;
    }
    DashboardTopProductsTableComponent.prototype.getProducts = function (page, sort, order) {
        var requestUrl = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].apiBaseUrl + "/api/products?datafilter=" + this.auth.getDataFilter() + "&page=" + (page + 1) + "&sort=" + sort + "&order=" + order;
        return this.http.get(requestUrl);
    };
    DashboardTopProductsTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["a" /* merge */])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_startWith__["a" /* startWith */])({}), Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_switchMap__["a" /* switchMap */])(function () {
            setTimeout(function () { return _this.isLoadingResults = true; });
            return _this.getProducts(_this.paginator.pageIndex, _this.sort.active, _this.sort.direction);
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__["a" /* map */])(function (data) {
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.resultsLength = data.total;
            return data.items;
        }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(function () {
            _this.isLoadingResults = false;
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])([]);
        })).subscribe(function (data) { return _this.dataSource.data = data; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */])
    ], DashboardTopProductsTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSort */])
    ], DashboardTopProductsTableComponent.prototype, "sort", void 0);
    DashboardTopProductsTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dashboard-top-products-table',
            template: __webpack_require__("../../../../../src/app/components/tables/dashboard-tables/dashboard-top-products-table/dashboard-top-products-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tables/dashboard-tables/dashboard-top-products-table/dashboard-top-products-table.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */]])
    ], DashboardTopProductsTableComponent);
    return DashboardTopProductsTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tables/dashboard-tables/dashboard-views-by-firm-table/dashboard-views-by-firm-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-container mat-elevation-z4\">\n    <!-- Header -->\n    <div class=\"header\">\n        <h6>Views By Firm</h6>   \n    </div>\n    <!-- Loading Shade -->\n    <div class=\"loading-shade\" *ngIf=\"isLoadingResults\"></div>\n    <mat-table #table [dataSource]=\"dataSource\" matSort matSortActive=\"views\" matSortDisableClear matSortDirection=\"desc\">\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/firms/', row.id]\">{{row.name}}</a></mat-cell>\n        </ng-container>\n        <!-- Users Column -->\n        <ng-container matColumnDef=\"users\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Users </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">{{row.users}}</mat-cell>\n        </ng-container>\n        <!-- Views Column -->\n        <ng-container matColumnDef=\"views\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Views </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.views}} </mat-cell>\n        </ng-container>\n        <!-- Row Headers -->\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <!-- Paginator -->\n    <mat-paginator [length]=\"resultsLength\" [pageSize]=\"20\"></mat-paginator>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/tables/dashboard-tables/dashboard-views-by-firm-table/dashboard-views-by-firm-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  min-height: 2em;\n  line-height: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: inherit;\n    margin: 0px; }\n\n.table-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n  position: relative; }\n\n.mat-table {\n  overflow: auto; }\n\n.mat-header-cell .mat-sort-header-sorted {\n  color: black; }\n\n.loading-shade {\n  position: absolute;\n  top: 0px;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.mat-column-views {\n  min-width: 64px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/dashboard-tables/dashboard-views-by-firm-table/dashboard-views-by-firm-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardViewsByFirmTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__ = __webpack_require__("../../../../rxjs/_esm5/operators/catchError.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
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
    function DashboardViewsByFirmTableComponent(http, auth) {
        this.http = http;
        this.auth = auth;
        this.displayedColumns = ['name', 'views'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatTableDataSource */]();
        this.resultsLength = 0;
        this.isLoadingResults = false;
    }
    DashboardViewsByFirmTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["a" /* merge */])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_startWith__["a" /* startWith */])({}), Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_switchMap__["a" /* switchMap */])(function () {
            setTimeout(function () { return _this.isLoadingResults = true; });
            return _this.getFirms(_this.paginator.pageIndex, _this.sort.active, _this.sort.direction);
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__["a" /* map */])(function (data) {
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.resultsLength = data.total;
            return data.items;
        }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(function () {
            _this.isLoadingResults = false;
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])([]);
        })).subscribe(function (data) { return _this.dataSource.data = data; });
    };
    DashboardViewsByFirmTableComponent.prototype.getFirms = function (page, sort, order) {
        var requestUrl = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].apiBaseUrl + "/api/firms/?datafilter=" + this.auth.getDataFilter() + "&page=" + (page + 1) + "&sort=" + sort + "&order=" + order;
        return this.http.get(requestUrl);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */])
    ], DashboardViewsByFirmTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSort */])
    ], DashboardViewsByFirmTableComponent.prototype, "sort", void 0);
    DashboardViewsByFirmTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dashboard-views-by-firm-table',
            template: __webpack_require__("../../../../../src/app/components/tables/dashboard-tables/dashboard-views-by-firm-table/dashboard-views-by-firm-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tables/dashboard-tables/dashboard-views-by-firm-table/dashboard-views-by-firm-table.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */]])
    ], DashboardViewsByFirmTableComponent);
    return DashboardViewsByFirmTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tables/firm-actions-table/firm-actions-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-container mat-elevation-z4\">\n    <!-- Header -->\n    <div class=\"header\">\n        <h6>Views By Date</h6>\n    </div>\n    <!-- Loading Shade -->\n    <div class=\"loading-shade\" *ngIf=\"isLoadingResults\"></div>\n    <mat-table #table [dataSource]=\"dataSource\" matSort matSortActive=\"date\" matSortDisableClear matSortDirection=\"desc\">\n        <!-- Date Column -->\n        <ng-container matColumnDef=\"date\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Date/Time\t </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.date}} </mat-cell>\n        </ng-container>\n        <!-- Location Column -->\n        <ng-container matColumnDef=\"location\">\n            <mat-header-cell *matHeaderCellDef> Location </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n                <span *ngIf=\"row.address\">{{row.address}}</span><br>\n                <span *ngIf=\"row.city\">{{row.city}},</span><br>\n                <span *ngIf=\"row.state\">{{row.state}}</span>\n                <span *ngIf=\"row.zip\">{{row.zip}}</span><br>\n                <span *ngIf=\"row.country\">{{row.country}}<br></span>\n            </mat-cell>\n        </ng-container>\n        <!-- Type Column -->\n        <ng-container matColumnDef=\"type\">\n            <mat-header-cell *matHeaderCellDef> Action Type </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.type}} </mat-cell>\n        </ng-container> -->\n        <!-- Portfolio Column -->\n        <ng-container matColumnDef=\"portfolio\">\n            <mat-header-cell *matHeaderCellDef class=\"portfolio-width\"> Portfolio </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" class=\"portfolio-width\">\n            <span *ngFor=\"let item of row.portfolio\">\n                <span *ngIf='isNA(item)'>N/A</span>\n                <span *ngIf='!isNA(item)'>\n                    <a [routerLink]=\"['/products/', item.ticker]\">{{ item.ticker }}</a>: {{ item.percentage }}<br>\n                </span>\n            </span>\n            </mat-cell>\n        </ng-container>\n        <!-- Row Headers -->\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <!-- Paginator -->\n    <mat-paginator [length]=\"resultsLength\" [pageSize]=\"20\"></mat-paginator>\n</div>\n  \n    "

/***/ }),

/***/ "../../../../../src/app/components/tables/firm-actions-table/firm-actions-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  min-height: 2em;\n  line-height: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: inherit;\n    margin: 0px; }\n\n.table-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n  position: relative; }\n\n.mat-table {\n  overflow: auto; }\n\n.mat-header-cell .mat-sort-header-sorted {\n  color: black; }\n\n.loading-shade {\n  position: absolute;\n  top: 0px;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.mat-column-views {\n  min-width: 64px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/firm-actions-table/firm-actions-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmActionsTableComponent; });
/* unused harmony export FirmActionsConnection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__ = __webpack_require__("../../../../rxjs/_esm5/operators/catchError.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
    function FirmActionsTableComponent(http) {
        this.http = http;
        this.displayedColumns = ['date', 'location', 'type', 'portfolio'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatTableDataSource */]();
        this.resultsLength = 0;
        this.isLoadingResults = false;
    }
    FirmActionsTableComponent.prototype.isNA = function (pair) {
        if (pair.ticker === "" || pair.percentage === "%") {
            return true;
        }
        else {
            return false;
        }
    };
    FirmActionsTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.connection = new FirmActionsConnection(this.http);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["a" /* merge */])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_startWith__["a" /* startWith */])({}), Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_switchMap__["a" /* switchMap */])(function () {
            setTimeout(function () { return _this.isLoadingResults = true; });
            return _this.connection.getActions(_this.firmId, _this.paginator.pageIndex, _this.sort.active, _this.sort.direction);
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__["a" /* map */])(function (data) {
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.resultsLength = data.total;
            //modify data here
            console.log(data.items);
            data.items.map(function (row) {
                var arr = [];
                var dict = JSON.parse(row.portfolio);
                for (var key in dict) {
                    var percentage = dict[key];
                    percentage = percentage.toString();
                    percentage = percentage.replace(/"/g, "");
                    percentage = percentage.replace(/,/g, '.');
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
            return data.items;
        }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(function () {
            _this.isLoadingResults = false;
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])([]);
        })).subscribe(function (data) { return _this.dataSource.data = data; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], FirmActionsTableComponent.prototype, "firmId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */])
    ], FirmActionsTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSort */])
    ], FirmActionsTableComponent.prototype, "sort", void 0);
    FirmActionsTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'firm-actions-table',
            template: __webpack_require__("../../../../../src/app/components/tables/firm-actions-table/firm-actions-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tables/firm-actions-table/firm-actions-table.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], FirmActionsTableComponent);
    return FirmActionsTableComponent;
}());

var FirmActionsConnection = (function () {
    function FirmActionsConnection(http) {
        this.http = http;
    }
    //call the api with a page number, sort field, and sort order(asc/desc)
    FirmActionsConnection.prototype.getActions = function (id, page, sort, order) {
        var requestUrl = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].apiBaseUrl + "/api/firms/actions/" + id + "?page=" + (page + 1) + "&sort=" + sort + "&order=" + order;
        return this.http.get(requestUrl);
    };
    return FirmActionsConnection;
}());



/***/ }),

/***/ "../../../../../src/app/components/tables/firm-views-table/firm-views-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-container mat-elevation-z4\">\n    <!-- Header -->\n    <div class=\"header\">\n        <h6>Viewed Products</h6>\n    </div>\n    <!-- Loading Shade -->\n    <div class=\"loading-shade\" *ngIf=\"isLoadingResults\"></div>\n    <mat-table #table [dataSource]=\"dataSource\" matSort matSortActive=\"views\" matSortDisableClear matSortDirection=\"desc\">\n        <!-- Ticker Column -->\n        <ng-container matColumnDef=\"ticker\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Ticker </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/products/', row.ticker]\">{{row.ticker}}</a></mat-cell>\n        </ng-container>\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/products/', row.ticker]\">{{row.name}}</a></mat-cell>\n        </ng-container>\n        <!--Issuer Column -->\n        <ng-container matColumnDef=\"issuer\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Issuer </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.issuer}} </mat-cell>\n        </ng-container>\n        <!-- Views Column -->\n        <ng-container matColumnDef=\"views\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Views </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['./products/', row.ticker]\">{{row.views}}</a></mat-cell>\n        </ng-container>\n        <!-- Row Headers -->\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <!-- Paginator -->\n    <mat-paginator [length]=\"resultsLength\" [pageSize]=\"20\"></mat-paginator>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tables/firm-views-table/firm-views-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  min-height: 2em;\n  line-height: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: inherit;\n    margin: 0px; }\n\n.table-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n  position: relative; }\n\n.mat-table {\n  overflow: auto; }\n\n.mat-header-cell .mat-sort-header-sorted {\n  color: black; }\n\n.loading-shade {\n  position: absolute;\n  top: 0px;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.mat-column-views {\n  min-width: 64px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/firm-views-table/firm-views-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmViewsTableComponent; });
/* unused harmony export FirmViewedProductsConnection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__ = __webpack_require__("../../../../rxjs/_esm5/operators/catchError.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
    function FirmViewsTableComponent(http) {
        this.http = http;
        this.displayedColumns = ['ticker', 'name', 'issuer', 'views'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatTableDataSource */]();
        this.resultsLength = 0;
        this.isLoadingResults = false;
    }
    FirmViewsTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.connection = new FirmViewedProductsConnection(this.http);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["a" /* merge */])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_startWith__["a" /* startWith */])({}), Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_switchMap__["a" /* switchMap */])(function () {
            setTimeout(function () { return _this.isLoadingResults = true; });
            return _this.connection.getProducts(_this.firmId, _this.paginator.pageIndex, _this.sort.active, _this.sort.direction);
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__["a" /* map */])(function (data) {
            console.log(data);
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.resultsLength = data.total;
            return data.items;
        }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(function () {
            _this.isLoadingResults = false;
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])([]);
        })).subscribe(function (data) { return _this.dataSource.data = data; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], FirmViewsTableComponent.prototype, "firmId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */])
    ], FirmViewsTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSort */])
    ], FirmViewsTableComponent.prototype, "sort", void 0);
    FirmViewsTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'firm-views-table',
            template: __webpack_require__("../../../../../src/app/components/tables/firm-views-table/firm-views-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tables/firm-views-table/firm-views-table.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], FirmViewsTableComponent);
    return FirmViewsTableComponent;
}());

var FirmViewedProductsConnection = (function () {
    function FirmViewedProductsConnection(http) {
        this.http = http;
    }
    //call the api with a page number, sort field, and sort order(asc/desc)
    FirmViewedProductsConnection.prototype.getProducts = function (id, page, sort, order) {
        var requestUrl = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].apiBaseUrl + "/api/firms/views/" + id + "?page=" + (page + 1) + "&sort=" + sort + "&order=" + order;
        return this.http.get(requestUrl);
    };
    return FirmViewedProductsConnection;
}());



/***/ }),

/***/ "../../../../../src/app/components/tables/firms-table/firms-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-container mat-elevation-z4\">\n    <!-- Header -->\n    <div class=\"header\">\n        <h6>All Firms</h6>   \n    </div>\n    <!-- Loading Shade -->\n    <div class=\"loading-shade\" *ngIf=\"isLoadingResults\"></div>\n    <mat-table #table [dataSource]=\"dataSource\" matSort matSortActive=\"views\" matSortDisableClear matSortDirection=\"desc\">\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/firms/', row.id]\">{{row.name}}</a></mat-cell>\n        </ng-container>\n        <!-- Users Column -->\n        <ng-container matColumnDef=\"users\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Users </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">{{row.users}}</mat-cell>\n        </ng-container>\n        <!-- Views Column -->\n        <ng-container matColumnDef=\"views\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Views </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.views}} </mat-cell>\n        </ng-container>\n        <!-- Row Headers -->\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <!-- Paginator -->\n    <mat-paginator [length]=\"resultsLength\" [pageSize]=\"20\"></mat-paginator>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tables/firms-table/firms-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  min-height: 2em;\n  line-height: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: inherit;\n    margin: 0px; }\n\n.table-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n  position: relative; }\n\n.mat-table {\n  overflow: auto; }\n\n.mat-header-cell .mat-sort-header-sorted {\n  color: black; }\n\n.loading-shade {\n  position: absolute;\n  top: 0px;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.mat-column-views {\n  min-width: 64px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/firms-table/firms-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmsTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__ = __webpack_require__("../../../../rxjs/_esm5/operators/catchError.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
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
    function FirmsTableComponent(http, auth) {
        this.http = http;
        this.auth = auth;
        this.displayedColumns = ['name', 'users', 'views'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatTableDataSource */]();
        this.resultsLength = 0;
        this.isLoadingResults = false;
    }
    FirmsTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["a" /* merge */])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_startWith__["a" /* startWith */])({}), Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_switchMap__["a" /* switchMap */])(function () {
            setTimeout(function () { return _this.isLoadingResults = true; });
            return _this.getFirms(_this.paginator.pageIndex, _this.sort.active, _this.sort.direction);
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__["a" /* map */])(function (data) {
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.resultsLength = data.total;
            return data.items;
        }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(function () {
            _this.isLoadingResults = false;
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])([]);
        })).subscribe(function (data) { return _this.dataSource.data = data; });
    };
    FirmsTableComponent.prototype.getFirms = function (page, sort, order) {
        var requestUrl = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].apiBaseUrl + "/api/firms?datafilter=" + this.auth.getDataFilter() + "&page=" + (page + 1) + "&sort=" + sort + "&order=" + order;
        return this.http.get(requestUrl);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */])
    ], FirmsTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSort */])
    ], FirmsTableComponent.prototype, "sort", void 0);
    FirmsTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'firms-table',
            template: __webpack_require__("../../../../../src/app/components/tables/firms-table/firms-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tables/firms-table/firms-table.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */]])
    ], FirmsTableComponent);
    return FirmsTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tables/fp-combo-table/fp-combo-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-container mat-elevation-z4\">\n    <!-- Header -->\n    <div class=\"header\">\n        <h6>Views By Date</h6>\n    </div>\n    <!-- Loading Shade -->\n    <div class=\"loading-shade\" *ngIf=\"isLoadingResults\"></div>\n    <mat-table #table [dataSource]=\"dataSource\" matSort matSortActive=\"date\" matSortDisableClear matSortDirection=\"desc\">         \n        <!-- Date Column -->\n        <ng-container matColumnDef=\"date\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Date/Time\t </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.date}} </mat-cell>\n        </ng-container>\n        <!-- Location Column -->\n        <ng-container matColumnDef=\"location\">\n            <mat-header-cell *matHeaderCellDef> Location </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n            <span *ngIf=\"row.address\">{{row.address}}</span><br>\n            <span *ngIf=\"row.city\">{{row.city}},</span><br>\n            <span *ngIf=\"row.state\">{{row.state}}</span>\n            <span *ngIf=\"row.zip\">{{row.zip}}</span><br>\n            <span *ngIf=\"row.country\">{{row.country}}<br></span>\n            </mat-cell>\n        </ng-container>\n        <!-- Type Column -->\n        <ng-container matColumnDef=\"type\">\n            <mat-header-cell *matHeaderCellDef> Action Type </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.type}} </mat-cell>\n        </ng-container>\n        <!-- Portfolio Column -->\n        <ng-container matColumnDef=\"portfolio\">\n            <mat-header-cell *matHeaderCellDef class=\"portfolio-width\"> Portfolio </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" class=\"portfolio-width\">\n            <span *ngFor=\"let item of row.portfolio\">\n                <a [routerLink]=\"['/products/', item.ticker]\">{{ item.ticker }}</a>: {{ item.percentage }}<br>\n            </span>\n            </mat-cell>\n        </ng-container>\n        <!-- Row Headers -->\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <!-- Paginator -->\n    <mat-paginator [length]=\"resultsLength\" [pageSize]=\"20\"></mat-paginator>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/tables/fp-combo-table/fp-combo-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  min-height: 2em;\n  line-height: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: inherit;\n    margin: 0px; }\n\n.table-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n  position: relative; }\n\n.mat-table {\n  overflow: auto; }\n\n.mat-header-cell .mat-sort-header-sorted {\n  color: black; }\n\n.loading-shade {\n  position: absolute;\n  top: 0px;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.mat-column-views {\n  min-width: 64px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/fp-combo-table/fp-combo-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FpComboTableComponent; });
/* unused harmony export FPComboConnection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__ = __webpack_require__("../../../../rxjs/_esm5/operators/catchError.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
    function FpComboTableComponent(http) {
        this.http = http;
        this.displayedColumns = ['date', 'location', 'type', 'portfolio'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatTableDataSource */]();
        this.resultsLength = 0;
        this.isLoadingResults = false;
    }
    FpComboTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.connection = new FPComboConnection(this.http);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["a" /* merge */])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_startWith__["a" /* startWith */])({}), Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_switchMap__["a" /* switchMap */])(function () {
            setTimeout(function () { return _this.isLoadingResults = true; });
            return _this.connection.getActions(_this.ticker, _this.firmId, _this.paginator.pageIndex, _this.sort.active, _this.sort.direction);
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__["a" /* map */])(function (data) {
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.resultsLength = data.total;
            //modify data here
            data.items.map(function (row) {
                var arr = [];
                var dict = JSON.parse(row.portfolio);
                for (var key in dict) {
                    var percentage = dict[key];
                    percentage = percentage.toString();
                    percentage = percentage.replace(/"/g, "");
                    percentage = percentage.replace(/,/g, '.');
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
            return data.items;
        }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(function () {
            _this.isLoadingResults = false;
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])([]);
        })).subscribe(function (data) { return _this.dataSource.data = data; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], FpComboTableComponent.prototype, "firmId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], FpComboTableComponent.prototype, "ticker", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */])
    ], FpComboTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSort */])
    ], FpComboTableComponent.prototype, "sort", void 0);
    FpComboTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fp-combo-table',
            template: __webpack_require__("../../../../../src/app/components/tables/fp-combo-table/fp-combo-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tables/fp-combo-table/fp-combo-table.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], FpComboTableComponent);
    return FpComboTableComponent;
}());

var FPComboConnection = (function () {
    function FPComboConnection(http) {
        this.http = http;
    }
    //call the api with a page number, sort field, and sort order(asc/desc)
    FPComboConnection.prototype.getActions = function (ticker, id, page, sort, order) {
        var requestUrl = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].apiBaseUrl + "/api/products/" + ticker + "/firms/" + id + "?page=" + (page + 1) + "&sort=" + sort + "&order=" + order;
        return this.http.get(requestUrl);
    };
    return FPComboConnection;
}());



/***/ }),

/***/ "../../../../../src/app/components/tables/product-actions-table/product-actions-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-container mat-elevation-z4\">\n    <!-- Header -->\n    <div class=\"header\">\n    <h6>Views By Date</h6>\n    </div>\n    <!-- Loading Shade -->\n    <div class=\"loading-shade\" *ngIf=\"isLoadingResults\"></div>\n    <mat-table #table [dataSource]=\"dataSource\" matSort matSortActive=\"date\" matSortDisableClear matSortDirection=\"desc\">\n        <!-- Date Column -->\n        <ng-container matColumnDef=\"date\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Date/Time </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.date}} </mat-cell>\n        </ng-container>\n        <!-- Firm Column -->\n        <ng-container matColumnDef=\"firm\">\n            <mat-header-cell *matHeaderCellDef> Firm </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/firms/', row.firmId]\">{{ row.firm }}</a></mat-cell>\n        </ng-container>\n        <!-- Location Column -->\n        <ng-container matColumnDef=\"location\">\n            <mat-header-cell *matHeaderCellDef> Location </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n                <span *ngIf=\"row.address\">{{row.address}}</span><br>\n                <span *ngIf=\"row.city\">{{row.city}},</span><br>\n                <span *ngIf=\"row.state\">{{row.state}}</span>\n                <span *ngIf=\"row.zip\">{{row.zip}}</span><br>\n                <span *ngIf=\"row.country\">{{row.country}}<br></span>\n            </mat-cell>\n        </ng-container>\n        <!-- Type Column -->\n        <ng-container matColumnDef=\"type\">\n            <mat-header-cell *matHeaderCellDef> Action Type </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.type}} </mat-cell>\n        </ng-container> -->\n        <!-- Portfolio Column -->\n        <ng-container matColumnDef=\"portfolio\">\n            <mat-header-cell *matHeaderCellDef class=\"portfolio-width\"> Portfolio </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" class=\"portfolio-width\">\n            <span *ngFor=\"let item of row.portfolio\">\n                <a [routerLink]=\"['/products/', item.ticker]\">{{ item.ticker }}</a>: {{ item.percentage }}<br>\n            </span>\n            </mat-cell>\n        </ng-container>\n        <!-- Row Headers -->\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <!-- Paginator -->\n    <mat-paginator [length]=\"resultsLength\" [pageSize]=\"20\"></mat-paginator>\n</div>\n    \n  \n    "

/***/ }),

/***/ "../../../../../src/app/components/tables/product-actions-table/product-actions-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  min-height: 2em;\n  line-height: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: inherit;\n    margin: 0px; }\n\n.table-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n  position: relative; }\n\n.mat-table {\n  overflow: auto; }\n\n.mat-header-cell .mat-sort-header-sorted {\n  color: black; }\n\n.loading-shade {\n  position: absolute;\n  top: 0px;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.mat-column-views {\n  min-width: 64px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/product-actions-table/product-actions-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductActionsTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__ = __webpack_require__("../../../../rxjs/_esm5/operators/catchError.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
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
    function ProductActionsTableComponent(http, auth) {
        this.http = http;
        this.auth = auth;
        this.displayedColumns = ['date', 'firm', 'location', 'type', 'portfolio'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatTableDataSource */]();
        this.resultsLength = 0;
        this.isLoadingResults = false;
    }
    ProductActionsTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["a" /* merge */])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_startWith__["a" /* startWith */])({}), Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_switchMap__["a" /* switchMap */])(function () {
            setTimeout(function () { return _this.isLoadingResults = true; });
            return _this.getActions(_this.ticker, _this.paginator.pageIndex, _this.sort.active, _this.sort.direction);
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__["a" /* map */])(function (data) {
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.resultsLength = data.total;
            //modify data here
            data.items.map(function (row) {
                var arr = [];
                var dict = JSON.parse(row.portfolio);
                for (var key in dict) {
                    var percentage = dict[key];
                    percentage = percentage.toString();
                    percentage = percentage.replace(/"/g, "");
                    percentage = percentage.replace(/,/g, '.');
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
            return data.items;
        }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(function () {
            _this.isLoadingResults = false;
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])([]);
        })).subscribe(function (data) { return _this.dataSource.data = data; });
    };
    ProductActionsTableComponent.prototype.getActions = function (ticker, page, sort, order) {
        var requestUrl = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].apiBaseUrl + "/api/products/actions/" + ticker + "?datafilter=" + this.auth.getDataFilter() + "&page=" + (page + 1) + "&sort=" + sort + "&order=" + order;
        return this.http.get(requestUrl);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ProductActionsTableComponent.prototype, "ticker", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */])
    ], ProductActionsTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSort */])
    ], ProductActionsTableComponent.prototype, "sort", void 0);
    ProductActionsTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'product-actions-table',
            template: __webpack_require__("../../../../../src/app/components/tables/product-actions-table/product-actions-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tables/product-actions-table/product-actions-table.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */]])
    ], ProductActionsTableComponent);
    return ProductActionsTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tables/product-firms-table/product-firms-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-container mat-elevation-z4\">\n    <!-- Header -->\n    <div class=\"header\">\n        <h6>Views By Firm</h6> \n    </div>\n    <!-- Loading Shade -->\n    <div class=\"loading-shade\" *ngIf=\"isLoadingResults\"></div>\n    <mat-table #table [dataSource]=\"dataSource\" matSort matSortActive=\"views\" matSortDisableClear matSortDirection=\"desc\">\n        <!-- Firm Column -->\n        <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/firms/', row.firmId]\">{{row.name}}</a></mat-cell>\n        </ng-container>\n        <!-- Users Column -->\n        <ng-container matColumnDef=\"users\">\n            <mat-header-cell *matHeaderCellDef  mat-sort-header class=\"fixed-width\"> Users </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" class=\"fixed-width\"> {{row.users}} </mat-cell>\n        </ng-container>\n        <!-- Views Column -->\n        <ng-container matColumnDef=\"views\">\n            <mat-header-cell *matHeaderCellDef  mat-sort-header class=\"fixed-width\"> Views </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" class=\"fixed-width\"><a [routerLink]=\"['./firms/', row.firmId]\">{{row.views}}</a></mat-cell>\n        </ng-container>\n        <!-- Row Headers -->\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <!-- Paginator -->\n    <mat-paginator [length]=\"resultsLength\" [pageSize]=\"20\"></mat-paginator>\n</div>\n      "

/***/ }),

/***/ "../../../../../src/app/components/tables/product-firms-table/product-firms-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  min-height: 2em;\n  line-height: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: inherit;\n    margin: 0px; }\n\n.table-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n  position: relative; }\n\n.mat-table {\n  overflow: auto; }\n\n.mat-header-cell .mat-sort-header-sorted {\n  color: black; }\n\n.loading-shade {\n  position: absolute;\n  top: 0px;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.mat-column-views {\n  min-width: 64px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/product-firms-table/product-firms-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFirmsTableComponent; });
/* unused harmony export FirmsConnection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__ = __webpack_require__("../../../../rxjs/_esm5/operators/catchError.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
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
    function ProductFirmsTableComponent(http, auth) {
        this.http = http;
        this.auth = auth;
        this.displayedColumns = ['name', 'users', 'views'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatTableDataSource */]();
        this.resultsLength = 0;
        this.isLoadingResults = false;
    }
    ProductFirmsTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.connection = new FirmsConnection(this.http, this.auth);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["a" /* merge */])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_startWith__["a" /* startWith */])({}), Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_switchMap__["a" /* switchMap */])(function () {
            setTimeout(function () { return _this.isLoadingResults = true; });
            return _this.connection.getFirms(_this.ticker, _this.paginator.pageIndex, _this.sort.active, _this.sort.direction);
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__["a" /* map */])(function (data) {
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.resultsLength = data.total;
            return data.items;
        }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(function () {
            _this.isLoadingResults = false;
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])([]);
        })).subscribe(function (data) { return _this.dataSource.data = data; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ProductFirmsTableComponent.prototype, "ticker", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */])
    ], ProductFirmsTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSort */])
    ], ProductFirmsTableComponent.prototype, "sort", void 0);
    ProductFirmsTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'product-firms-table',
            template: __webpack_require__("../../../../../src/app/components/tables/product-firms-table/product-firms-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tables/product-firms-table/product-firms-table.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */]])
    ], ProductFirmsTableComponent);
    return ProductFirmsTableComponent;
}());

var FirmsConnection = (function () {
    function FirmsConnection(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    //call the api with a page number, sort field, and sort order(asc/desc)
    FirmsConnection.prototype.getFirms = function (ticker, page, sort, order) {
        var requestUrl = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].apiBaseUrl + "/api/products/firms/" + ticker + "?datafilter=" + this.auth.getDataFilter() + "&page=" + (page + 1) + "&sort=" + sort + "&order=" + order;
        return this.http.get(requestUrl);
    };
    return FirmsConnection;
}());



/***/ }),

/***/ "../../../../../src/app/components/tables/products-table/products-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-container mat-elevation-z4\">\n    <!-- Header -->\n    <div class=\"header\">\n        <h6>All Products</h6>   \n    </div>\n    <!-- Loading Shade -->\n    <div class=\"loading-shade\" *ngIf=\"isLoadingResults\"></div>\n    <mat-table #table [dataSource]=\"dataSource\" matSort matSortActive=\"views\" matSortDisableClear matSortDirection=\"desc\">\n        <!-- Ticker Column -->\n        <ng-container matColumnDef=\"ticker\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Ticker </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/products/', row.ticker]\">{{row.ticker}}</a></mat-cell>\n        </ng-container>\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"><a [routerLink]=\"['/products/', row.ticker]\">{{row.name}}</a></mat-cell>\n        </ng-container>\n        <!-- Issuer Column -->\n        <ng-container matColumnDef=\"issuer\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Issuer </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">{{row.issuer}}</mat-cell>\n        </ng-container>\n        <!-- Views Column -->\n        <ng-container matColumnDef=\"views\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Views </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.views}} </mat-cell>\n        </ng-container>\n        <!-- Row Headers -->\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <!-- Paginator -->\n    <mat-paginator [length]=\"resultsLength\" [pageSize]=\"20\"></mat-paginator>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/tables/products-table/products-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  min-height: 2em;\n  line-height: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: inherit;\n    margin: 0px; }\n\n.table-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n  position: relative; }\n\n.mat-table {\n  overflow: auto; }\n\n.mat-header-cell .mat-sort-header-sorted {\n  color: black; }\n\n.loading-shade {\n  position: absolute;\n  top: 0px;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.mat-column-views {\n  min-width: 64px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/products-table/products-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__ = __webpack_require__("../../../../rxjs/_esm5/operators/catchError.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
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
    function ProductsTableComponent(http, auth) {
        this.http = http;
        this.auth = auth;
        this.displayedColumns = ['ticker', 'name', 'issuer', 'views'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatTableDataSource */]();
        this.resultsLength = 0;
        this.isLoadingResults = false;
    }
    ProductsTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["a" /* merge */])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_startWith__["a" /* startWith */])({}), Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_switchMap__["a" /* switchMap */])(function () {
            setTimeout(function () { return _this.isLoadingResults = true; });
            return _this.getProducts(_this.paginator.pageIndex, _this.sort.active, _this.sort.direction);
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__["a" /* map */])(function (data) {
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.resultsLength = data.total;
            return data.items;
        }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(function () {
            _this.isLoadingResults = false;
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])([]);
        })).subscribe(function (data) { return _this.dataSource.data = data; });
    };
    ProductsTableComponent.prototype.getProducts = function (page, sort, order) {
        var requestUrl = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].apiBaseUrl + "/api/products?datafilter=" + this.auth.getDataFilter() + "&page=" + (page + 1) + "&sort=" + sort + "&order=" + order;
        return this.http.get(requestUrl);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */])
    ], ProductsTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSort */])
    ], ProductsTableComponent.prototype, "sort", void 0);
    ProductsTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'products-table',
            template: __webpack_require__("../../../../../src/app/components/tables/products-table/products-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tables/products-table/products-table.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */]])
    ], ProductsTableComponent);
    return ProductsTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tables/search-results-table/search-results-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-container mat-elevation-z4\">\n    <!-- Header -->\n    <div class=\"header\">\n        <h6>{{header}}</h6>\n    </div>\n    <!-- Loading Shade -->\n    <div class=\"loading-shade\" *ngIf=\"isLoadingResults\"></div>\n    <mat-table #table [dataSource]=\"dataSource\">\n        <!-- Link Column -->\n        <ng-container matColumnDef=\"link\">\n        <mat-header-cell *matHeaderCellDef> Link </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n                <a *ngIf=\"row.id\" [routerLink]=\"['/firms/', row.id]\">{{row.link}}</a>      \n                <a *ngIf=\"row.ticker\" [routerLink]=\"['/products/', row.ticker]\">{{row.link}}</a>\n            </mat-cell>\n        </ng-container>\n        <!-- Type Column -->\n        <ng-container matColumnDef=\"type\">\n        <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n                <span *ngIf=\"row.id\">Firm</span>\n                <span *ngIf=\"row.ticker\">Product</span>\n            </mat-cell>\n        </ng-container>\n        <!-- Row Headers -->\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n</div>\n  \n    \n      \n"

/***/ }),

/***/ "../../../../../src/app/components/tables/search-results-table/search-results-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  height: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  padding-left: 24px;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .header h6 {\n    height: inherit;\n    line-height: 40px;\n    margin: 0px; }\n\n.mat-form-field {\n  font-size: 14px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-left: 32px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/search-results-table/search-results-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__ = __webpack_require__("../../../../rxjs/_esm5/operators/catchError.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
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
    function SearchResultsTableComponent(auth, http, route) {
        this.auth = auth;
        this.http = http;
        this.route = route;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatTableDataSource */]();
        this.resultsLength = 0;
        this.isLoadingResults = false;
        this.displayedColumns = ['link', 'type'];
    }
    SearchResultsTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.term = params.term;
            _this.loadData();
        });
    };
    SearchResultsTableComponent.prototype.loadData = function () {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["a" /* merge */])()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_startWith__["a" /* startWith */])({}), Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_switchMap__["a" /* switchMap */])(function () {
            setTimeout(function () { return _this.isLoadingResults = true; });
            return _this.getResults(_this.term);
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__["a" /* map */])(function (data) {
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.resultsLength = data.total;
            //set header
            if (_this.resultsLength === 0) {
                _this.header = "No results found for \"" + _this.term + "\".";
            }
            else if (_this.resultsLength === 1) {
                _this.header = "1 result for \"" + _this.term + "\".";
            }
            else {
                _this.header = _this.resultsLength + " results for \"" + _this.term + "\".";
            }
            //format data
            data.items.map(function (row) {
                if (row.ticker) {
                    row.link = row.ticker + " | " + row.name;
                }
                else {
                    row.link = "" + row.name;
                }
                return row;
            });
            return data.items;
        }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(function () {
            _this.isLoadingResults = false;
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])([]);
        })).subscribe(function (data) { return _this.dataSource.data = data; });
    };
    SearchResultsTableComponent.prototype.getResults = function (term) {
        var requestUrl = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].apiBaseUrl + "/api/search/" + term + "?datafilter=" + this.auth.getDataFilter();
        return this.http.get(requestUrl);
    };
    SearchResultsTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'search-results-table',
            template: __webpack_require__("../../../../../src/app/components/tables/search-results-table/search-results-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tables/search-results-table/search-results-table.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* ActivatedRoute */]])
    ], SearchResultsTableComponent);
    return SearchResultsTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/view-toggle/view-toggle.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".radio-container {\n  height: 2em;\n  text-align: center; }\n  .radio-container .mat-label-radio-content {\n    font-size: 12px !important; }\n  .radio-container .radio-button {\n    width: 40%;\n    line-height: 2em;\n    text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/view-toggle/view-toggle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewToggleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charts_views_by_type_pie_views_by_type_pie_component__ = __webpack_require__("../../../../../src/app/components/charts/views-by-type-pie/views-by-type-pie.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewToggleComponent = (function () {
    function ViewToggleComponent(auth, pie) {
        this.auth = auth;
        this.pie = pie;
        this.dataFilterChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.radioDisabled = true;
        if (this.auth.getIsSuperUser() === 'true') {
            this.radioDisabled = false;
        }
        this.radioForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({
            dataFilter: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]({ value: this.auth.getDataFilter(), disabled: this.radioDisabled })
        });
    }
    ViewToggleComponent.prototype.handleRadioChange = function (event) {
        if (this.auth.getDataFilter() === 'student') {
            this.auth.setDataFilter('professional');
        }
        else {
            this.auth.setDataFilter('student');
        }
        this.dataFilterChange.emit(this.auth.getDataFilter());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ViewToggleComponent.prototype, "dataFilter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], ViewToggleComponent.prototype, "dataFilterChange", void 0);
    ViewToggleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_3__charts_views_by_type_pie_views_by_type_pie_component__["a" /* ViewsByTypePieComponent */]],
            selector: 'view-toggle',
            template: "\n        <div [formGroup] = \"radioForm\" class=\"col-md-12 radio-container mat-elevation-z4\">\n            <mat-radio-group formControlName=\"dataFilter\">\n                <mat-radio-button (change)=handleRadioChange() class=\"radio-button\" value=\"professional\">Professional Data</mat-radio-button>\n                <mat-radio-button (change)=handleRadioChange() class=\"radio-button\" value=\"student\">Student Data</mat-radio-button>\n            </mat-radio-group>\n        </div>",
            styles: [__webpack_require__("../../../../../src/app/components/view-toggle/view-toggle.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__charts_views_by_type_pie_views_by_type_pie_component__["a" /* ViewsByTypePieComponent */]])
    ], ViewToggleComponent);
    return ViewToggleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
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
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatStepperModule */]
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
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatStepperModule */]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/firms/get-firm-info-by-id.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetFirmInfoByIdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
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
    GetFirmInfoByIdService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], GetFirmInfoByIdService);
    return GetFirmInfoByIdService;
}());



/***/ }),

/***/ "../../../../../src/app/services/products/get-product-info-by-ticker.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetProductInfoByTickerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
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
    GetProductInfoByTickerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], GetProductInfoByTickerService);
    return GetProductInfoByTickerService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: 'https://etfg.herokuapp.com',
    apiBaseUrl: 'https://etfg.herokuapp.com'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map