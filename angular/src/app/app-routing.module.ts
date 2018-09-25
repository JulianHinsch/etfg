import { Routes, RouterModule, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';

import { Landing } from './components/pages/landing/landing.component';
import { Dashboard } from './components/pages/dashboard/dashboard.component';
import { Firm } from './components/pages/firm/firm.component';
import { Firms } from './components/pages/firms/firms.component';
import { Product } from './components/pages/product/product.component';
import { Products } from './components/pages/products/products.component';
import { FirmProductCombination } from './components/pages/firm-product-combination/firm-product-combination.component';
import { SearchResults } from './components/pages/search-results/search-results.component';
import { Callback } from './callback/callback.component';

import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Landing },
    { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'firms', component: Firms, canActivate: [AuthGuard], pathMatch: 'full' },  
    { path: 'firms/:id', component: Firm, canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'firms/:id/products/:ticker', component: FirmProductCombination, canActivate: [AuthGuard], pathMatch: 'full' },  
    { path: 'products', component: Products, canActivate: [AuthGuard], pathMatch: 'full' },  
    { path: 'products/:ticker', component: Product, canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'products/:ticker/firms/:id', component: FirmProductCombination, canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'search/:term', component: SearchResults, canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'callback', component: Callback },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}