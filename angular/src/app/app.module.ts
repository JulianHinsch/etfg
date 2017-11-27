//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//api services
//firms
import { GetActionsByFirmIdService } from './services/firms/get-actions-by-firm-id.service';
import { GetAllFirmsService } from './services/firms/get-all-firms.service';
import { GetFirmInfoByIdService } from './services/firms/get-firm-info-by-id.service';
import { GetViewsByFirmIdService } from './services/firms/get-views-by-firm-id.service';
//products
import { GetAllProductsService } from './services/products/get-all-products.service';
import { GetProductInfoByTickerService } from './services/products/get-product-info-by-ticker.service';
import { GetActionsByTickerService } from './services/products/get-actions-by-ticker.service';
import { GetFirmsByTickerService } from './services/products/get-firms-by-ticker.service';
import { FpComboService } from './services/fp-combo/fp-combo.service';
//issuers
import { IssuersService } from './services/issuers/issuers.service';
//asset classes
import { AssetClassesService } from './services/asset-classes/asset-classes.service';
//countries
import { CountriesService } from './services/countries/countries.service';
//search
import { GetSearchResultsService } from './services/search/get-search-results.service';

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
import { DashboardMyProductsTableComponent } from './components/dashboard-tables/dashboard-my-products-table/dashboard-my-products-table.component';
import { DashboardViewsByFirmTableComponent } from './components/dashboard-tables/dashboard-views-by-firm-table/dashboard-views-by-firm-table.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductActionsTableComponent } from './components/product-actions-table/product-actions-table.component';
import { FirmsTableComponent } from './components/firms-table/firms-table.component';
import { FirmActionsTableComponent } from './components/firm-actions-table/firm-actions-table.component';
import { FirmViewsTableComponent } from './components/firm-views-table/firm-views-table.component';
import { FpComboTableComponent } from './components/fp-combo-table/fp-combo-table.component';
import { IssuerTableComponent } from './components/issuer-table/issuer-table.component';
import { IssuersTableComponent } from './components/issuers-table/issuers-table.component';
import { AssetClassesTableComponent } from './components/asset-classes-table/asset-classes-table.component';
import { AssetClassTableComponent } from './components/asset-class-table/asset-class-table.component';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { CountryTableComponent } from './components/country-table/country-table.component';

//page layouts
import { LandingComponent } from './pages/landing/landing.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AssetClassComponent } from './pages/asset-class/asset-class.component';
import { AssetClassesComponent } from './pages/asset-classes/asset-classes.component';
import { CountryComponent } from './pages/country/country.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { FirmComponent } from './pages/firm/firm.component';
import { FirmsComponent } from './pages/firms/firms.component';
import { IssuerComponent } from './pages/issuer/issuer.component';
import { IssuersComponent } from './pages/issuers/issuers.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductFirmsTableComponent } from './components/product-firms-table/product-firms-table.component';
import { FpComboComponent } from './pages/fp-combo/fp-combo.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SearchResultsTableComponent } from './components/search-results-table/search-results-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    
    LandingComponent,
    DashboardComponent,
    DashboardMyProductsTableComponent,
    DashboardViewsByFirmTableComponent,
    
    FirmComponent,
    FirmsComponent,
    FirmActionsTableComponent,
    FirmViewsTableComponent,
    FirmsTableComponent,

    ProductComponent,
    ProductsComponent,
    ProductsTableComponent,        
    ProductActionsTableComponent,

    CallbackComponent,
    PageTitleComponent,
    
    IssuerComponent,
    IssuersComponent,
    IssuerTableComponent,
    IssuersTableComponent,

    AssetClassComponent,
    AssetClassesComponent,
    AssetClassesTableComponent,
    AssetClassTableComponent,

    CountryComponent,
    CountriesComponent,
    CountriesTableComponent,
    CountryTableComponent,
    ProductFirmsTableComponent,
    FpComboComponent,
    FpComboTableComponent,
    SearchResultsComponent,
    SearchResultsTableComponent,
  ],
  imports: [
    NoopAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    FpComboService,
    GetActionsByFirmIdService,
    GetAllFirmsService,
    GetFirmInfoByIdService,
    GetViewsByFirmIdService,
    GetAllProductsService,
    GetProductInfoByTickerService,
    GetFirmsByTickerService,
    GetActionsByTickerService,
    GetSearchResultsService,
    AssetClassesService,
    CountriesService,
    IssuersService,
    AuthService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
