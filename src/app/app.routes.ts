import { Routes } from '@angular/router';
import { TransactionsComponent } from './page/transactions/transactions.component';
// import { TransactionsComponent } from './pages/transactions/transactions.component';
import { SigninComponent } from './pages/signin/signin.component';

export const routes: Routes = [
    {path:'signin-page', component:SigninComponent},
    {path: '', redirectTo: 'signin-page', pathMatch: 'full'},
    {path: '**', redirectTo: 'signin-page', pathMatch: 'full'}
];
