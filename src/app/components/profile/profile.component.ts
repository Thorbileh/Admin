import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  adminEmail:string ="admin@easyerrands.com";
  constructor(private router: Router){}
  signOut (){
    this.router.navigate(['/signin-page'])
  }
}
