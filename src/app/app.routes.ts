import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';

export const routes: Routes = [
    {path:'signin-page', component:SigninComponent},
    {path: '', redirectTo: 'signin-page', pathMatch: 'full'},
    {path: '**', redirectTo: 'signin-page', pathMatch: 'full'}
];
