import { Routes, RouterModule, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';

import { LandingComponent } from './pages/landing/landing.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FirmComponent } from './pages/firm/firm.component';
import { FirmsComponent } from './pages/firms/firms.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { FpComboComponent } from './pages/fp-combo/fp-combo.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { CallbackComponent } from './callback/callback.component';

import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: LandingComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], pathMatch: 'full'},
  { path: 'firms', component: FirmsComponent, canActivate: [AuthGuard], pathMatch: 'full'},  
  { path: 'firms/:id', component: FirmComponent, canActivate: [AuthGuard], pathMatch: 'full'},
  { path: 'firms/:id/products/:ticker', component: FpComboComponent, canActivate: [AuthGuard], pathMatch: 'full'},  
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard], pathMatch: 'full'},  
  { path: 'products/:ticker', component: ProductComponent, canActivate: [AuthGuard], pathMatch: 'full'},
  { path: 'products/:ticker/firms/:id', component: FpComboComponent, canActivate: [AuthGuard], pathMatch: 'full'},
  { path: 'search/:term', component: SearchResultsComponent, canActivate: [AuthGuard], pathMatch: 'full'},
  { path: 'callback', component: CallbackComponent},
  { path: '**', redirectTo: 'home' }
];

//canActivate: [AuthGuard,AdminGuard]
//*ngIf="auth.loggedIn && auth.isAdmin"

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}