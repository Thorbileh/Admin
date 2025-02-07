import { Routes } from '@angular/router';
import { TransactionsComponent } from './page/transactions/transactions.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {path:'signin-page', component:SigninComponent},
    {path: 'dashboard', component:DashboardComponent},
    {path: '', redirectTo: 'signin-page', pathMatch: 'full'},
   
    {path:'transaction',component:TransactionsComponent}
];
