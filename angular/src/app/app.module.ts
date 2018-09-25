//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';

//services
import { GetFirmInfoByIdService } from './services/firms/get-firm-info-by-id.service';
import { GetProductInfoByTickerService } from './services/products/get-product-info-by-ticker.service';

//auth services
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { Callback } from './callback/callback.component';

//components
import { App } from './app.component';

//ui components
import { PageTitle } from './components/page-title/page-title.component';
import { NavBar } from './components/navbar/navbar.component';

//tables
import { DashboardTopProductsTable } from './components/tables/dashboard-tables/dashboard-top-products-table/dashboard-top-products-table.component';
import { DashboardViewsByFirmTable } from './components/tables/dashboard-tables/dashboard-views-by-firm-table/dashboard-views-by-firm-table.component';
import { ProductActionsTable } from './components/tables/product-actions-table/product-actions-table.component';
import { FirmActionsTable } from './components/tables/firm-actions-table/firm-actions-table.component';
import { FirmViewsTable } from './components/tables/firm-views-table/firm-views-table.component';
import { FirmProductCombinationTable } from './components/tables/firm-product-combination-table/firm-product-combination-table.component';
import { SearchResultsTable } from './components/tables/search-results-table/search-results-table.component';
import { ProductsTable } from './components/tables/products-table/products-table.component';
import { FirmsTable } from './components/tables/firms-table/firms-table.component';
import { ProductFirmsTable } from './components/tables/product-firms-table/product-firms-table.component';

//page layouts
import { Landing } from './components/pages/landing/landing.component';
import { Dashboard } from './components/pages/dashboard/dashboard.component';
import { Firm } from './components/pages/firm/firm.component';
import { Firms } from './components/pages/firms/firms.component';
import { Product } from './components/pages/product/product.component';
import { Products } from './components/pages/products/products.component';
import { FirmProductCombination } from './components/pages/firm-product-combination/firm-product-combination.component';
import { SearchResults } from './components/pages/search-results/search-results.component';

//charts
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ViewsByTypePie } from './components/charts/views-by-type-pie/views-by-type-pie.component';
import { ViewsByCountryPie } from './components/charts/views-by-country-pie/views-by-country-pie.component';
import { ProductViewsByTypePie } from './components/charts/product-views-by-type-pie/product-views-by-type-pie.component';
import { ProductViewsByFirmPie } from './components/charts/product-views-by-firm-pie/product-views-by-firm-pie.component';


import { Footer } from './components/footer/footer.component';
import { ViewToggle } from './components/view-toggle/view-toggle.component';

@NgModule({
  declarations: [
    App,
    NavBar,
    Landing,
    Dashboard,
    DashboardTopProductsTable,
    DashboardViewsByFirmTable,
    Firm,
    Firms,
    FirmActionsTable,
    FirmViewsTable,
    Product,
    Products,     
    ProductActionsTable,
    Callback,
    PageTitle,
    ProductFirmsTable,
    FirmProductCombination,
    FirmProductCombinationTable,
    SearchResults,
    SearchResultsTable,
    ProductsTable,
    FirmsTable,
    ViewsByTypePie, 
    ViewsByCountryPie, 
    ProductViewsByTypePie, 
    ProductViewsByFirmPie, 
    Footer,
    ViewToggle
  ],
  imports: [
    Ng2GoogleChartsModule,
    NoopAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    GetProductInfoByTickerService,
    GetFirmInfoByIdService,
    AuthService,
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [App]
})
export class AppModule {}
