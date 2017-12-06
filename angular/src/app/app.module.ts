//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';

//services
import { GetSearchResultsService } from './services/search/get-search-results.service';
import { GetFirmInfoByIdService } from './services/firms/get-firm-info-by-id.service';
import { GetProductInfoByTickerService } from './services/products/get-product-info-by-ticker.service';

//auth services
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { CallbackComponent } from './callback/callback.component';

//components
import { AppComponent } from './app.component';

//ui components
import { PageTitleComponent } from './components/page-title/page-title.component';
import { NavBarComponent } from './components/navbar/navbar.component';

//tables
import { DashboardTopProductsTableComponent } from './components/dashboard-tables/dashboard-top-products-table/dashboard-top-products-table.component';
import { DashboardViewsByFirmTableComponent } from './components/dashboard-tables/dashboard-views-by-firm-table/dashboard-views-by-firm-table.component';
import { ProductActionsTableComponent } from './components/product-actions-table/product-actions-table.component';
import { FirmActionsTableComponent } from './components/firm-actions-table/firm-actions-table.component';
import { FirmViewsTableComponent } from './components/firm-views-table/firm-views-table.component';
import { FpComboTableComponent } from './components/fp-combo-table/fp-combo-table.component';
import { SearchResultsTableComponent } from './components/search-results-table/search-results-table.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { FirmsTableComponent } from './components/firms-table/firms-table.component';
import { ProductFirmsTableComponent } from './components/product-firms-table/product-firms-table.component';

//page layouts
import { LandingComponent } from './pages/landing/landing.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FirmComponent } from './pages/firm/firm.component';
import { FirmsComponent } from './pages/firms/firms.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { FpComboComponent } from './pages/fp-combo/fp-combo.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';

//charts
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { TypesOfViewsPieComponent } from './components/charts/types-of-views-pie/types-of-views-pie.component';
import { ViewsByCountryPieComponent } from './components/charts/views-by-country-pie/views-by-country-pie.component';
import { ProductViewsByActionPieComponent } from './components/charts/product-views-by-action-pie/product-views-by-action-pie.component';
import { ProductViewsByCountryPieComponent } from './components/charts/product-views-by-country-pie/product-views-by-country-pie.component';
import { ProductViewsByFirmPieComponent } from './components/charts/product-views-by-firm-pie/product-views-by-firm-pie.component';
import { TotalViewsBarComponent } from './components/charts/total-views-bar/total-views-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    
    LandingComponent,
    DashboardComponent,
    DashboardTopProductsTableComponent,
    DashboardViewsByFirmTableComponent,
    
    FirmComponent,
    FirmsComponent,
    FirmActionsTableComponent,
    FirmViewsTableComponent,

    ProductComponent,
    ProductsComponent,     
    ProductActionsTableComponent,

    CallbackComponent,
    PageTitleComponent,

    ProductFirmsTableComponent,
    FpComboComponent,
    FpComboTableComponent,
    SearchResultsComponent,
    SearchResultsTableComponent,
    ProductsTableComponent,
    FirmsTableComponent,
    
    TypesOfViewsPieComponent, 
    ViewsByCountryPieComponent, 
    ProductViewsByActionPieComponent, 
    ProductViewsByCountryPieComponent, 
    ProductViewsByFirmPieComponent, 
    TotalViewsBarComponent
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
    GetSearchResultsService,
    GetProductInfoByTickerService,
    GetFirmInfoByIdService,
    AuthService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
