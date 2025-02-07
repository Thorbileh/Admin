import { Component } from '@angular/core';
import { SideBarComponent } from "../../components/side-bar/side-bar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [SideBarComponent, CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  searchQuery: string = ''; 

  orders = [
    { runner: 'John Doe', orderNumber: 'ASF6IHBJOLKV',buyer:'Juda Baloyi', date: '31 Dec 2024', status: 'cancelled' ,profile:'profile-images/profile.jpg' },
    { runner: 'Joe Doe', orderNumber: 'ASF6IH45JOLKV', buyer:'Juda Baloyi', date: '31 Dec 2024', status: 'paid' ,profile:'profile-images/profile.jpg' },
    { runner: 'Sihle Ntshali', orderNumber: 'ASF6IH45JOLKV',buyer:'Juda Baloyi', date: '31 Dec 2024', status: 'paid' ,profile:'profile-images/profile1.avif' },
    { runner: 'Thando Lukhele', orderNumber: 'ASF6IH45JOLKV',buyer:'Juda Baloyi', date: '31 Dec 2024', status: 'paid'  ,profile:'profile-images/profile2.jpeg'}
  ];

}
