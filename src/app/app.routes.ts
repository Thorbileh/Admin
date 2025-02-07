import { Routes } from '@angular/router';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { SigninComponent } from './pages/signin/signin.component';
import { PayRunnerComponent } from './pages/pay-runner/pay-runner.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RunnersComponent } from './pages/runners/runners.component';
import { ViewRunnerComponent } from './pages/view-runner/view-runner.component';
import { TotalEarningsComponent } from './pages/total-earnings/pages/total-earnings.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ComplaintsComponent } from './pages/complaints/complaints.component';


export const routes: Routes = [
    {path:'signin-page', component:SigninComponent},
    {path: 'dashboard', component:DashboardComponent},
    {path:'transaction',component:TransactionsComponent},
    {path:'view-runner',component:ViewRunnerComponent},
    {path:'runners',component:RunnersComponent},
    {path:'pay-runner',component:PayRunnerComponent},
    { path: 'earnings', component: TotalEarningsComponent },
    {path:'orders',component:OrdersComponent},
    {path:'complaints',component:ComplaintsComponent},
    {path: '', redirectTo: 'signin-page', pathMatch: 'full'}, 
    {path: '**', redirectTo:'signin-page', pathMatch:'full'}

];
