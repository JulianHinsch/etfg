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
import { CallbackComponent } from './callback/callback.component';

//components
import { AppComponent } from './app.component';

//ui components
import { PageTitleComponent } from './components/page-title/page-title.component';
import { NavBarComponent } from './components/navbar/navbar.component';

//tables
import { DashboardTopProductsTableComponent } from './components/tables/dashboard-tables/dashboard-top-products-table/dashboard-top-products-table.component';
import { DashboardViewsByFirmTableComponent } from './components/tables/dashboard-tables/dashboard-views-by-firm-table/dashboard-views-by-firm-table.component';
import { ProductActionsTableComponent } from './components/tables/product-actions-table/product-actions-table.component';
import { FirmActionsTableComponent } from './components/tables/firm-actions-table/firm-actions-table.component';
import { FirmViewsTableComponent } from './components/tables/firm-views-table/firm-views-table.component';
import { FpComboTableComponent } from './components/tables/fp-combo-table/fp-combo-table.component';
import { SearchResultsTableComponent } from './components/tables/search-results-table/search-results-table.component';
import { ProductsTableComponent } from './components/tables/products-table/products-table.component';
import { FirmsTableComponent } from './components/tables/firms-table/firms-table.component';
import { ProductFirmsTableComponent } from './components/tables/product-firms-table/product-firms-table.component';

//page layouts
import { LandingComponent } from './components/pages/landing/landing.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { FirmComponent } from './components/pages/firm/firm.component';
import { FirmsComponent } from './components/pages/firms/firms.component';
import { ProductComponent } from './components/pages/product/product.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { FpComboComponent } from './components/pages/fp-combo/fp-combo.component';
import { SearchResultsComponent } from './components/pages/search-results/search-results.component';

//charts
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ViewsByTypePieComponent } from './components/charts/views-by-type-pie/views-by-type-pie.component';
import { ViewsByCountryPieComponent } from './components/charts/views-by-country-pie/views-by-country-pie.component';
import { ProductViewsByTypePieComponent } from './components/charts/product-views-by-type-pie/product-views-by-type-pie.component';
import { ProductViewsByFirmPieComponent } from './components/charts/product-views-by-firm-pie/product-views-by-firm-pie.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewToggleComponent } from './components/view-toggle/view-toggle.component';

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
    ViewsByTypePieComponent, 
    ViewsByCountryPieComponent, 
    ProductViewsByTypePieComponent, 
    ProductViewsByFirmPieComponent, 
    FooterComponent,
    ViewToggleComponent
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
  bootstrap: [AppComponent]
})
export class AppModule {}
