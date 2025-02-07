import { Routes } from '@angular/router';
import { TransactionsComponent } from './page/transactions/transactions.component';
import { SigninComponent } from './pages/signin/signin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';

export const routes: Routes = [
    {path:'signin-page', component:SigninComponent},
    {path: 'dashboard', component:DashboardComponent},
    {path:'transaction',component:TransactionsComponent},
    {path:'orders',component:OrdersComponent},
    {path: '', redirectTo: 'signin-page', pathMatch: 'full'}, 
    {path: '**', redirectTo:'signin-page', pathMatch:'full'}
];
