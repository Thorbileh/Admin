import { Routes } from '@angular/router';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { SigninComponent } from './pages/signin/signin.component';
import { PayRunnerComponent } from './pages/pay-runner/pay-runner.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RunnersComponent } from './pages/runners/runners.component';

export const routes: Routes = [
    {path:'signin-page', component:SigninComponent},
    {path: 'dashboard', component:DashboardComponent},
    {path: '', redirectTo: 'signin-page', pathMatch: 'full'}, 
    {path:'transaction',component:TransactionsComponent},
    {path:'pay-runner',component:PayRunnerComponent},
    {path:'runner',component:RunnersComponent}

];
