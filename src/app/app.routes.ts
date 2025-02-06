import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

export const routes: Routes = [
    {path:'signin-page', component:SigninComponent},
    {path: '', redirectTo: 'signin-page', pathMatch: 'full'},
    {path: '**', redirectTo: 'signin-page', pathMatch: 'full'},
    {path: 'side', component:SideBarComponent},
];
