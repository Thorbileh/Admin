import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from "../../components/side-bar/side-bar.component"; 

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule, SideBarComponent],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  selectedTab: string = 'open'; 
  searchQuery: string = ''; 

  openTransactions = [
    { runner: 'John Doe', orderNumber: 'ASF6IHBJOLKV', amount: 900, status: 'Delivered' ,profile:'profile-images/profile.jpg' },
    { runner: 'John Doe', orderNumber: 'ASF6IH45JOLKV', amount: 379, status: 'Delivered' ,profile:'profile-images/profile.jpg' },
    { runner: 'Sihle Ntshali', orderNumber: 'ASF6IH45JOLKV', amount: 200, status: 'In Progress' ,profile:'profile-images/profile1.avif' },
    { runner: 'Thando Lukhele', orderNumber: 'ASF6IH45JOLKV', amount: 379, status: 'Shipping'  ,profile:'profile-images/profile2.jpeg'}
  ];

  closedTransactions = [
    { runner: 'Jane Doe', orderNumber: 'ASF6IH45JOLKV', amount: 499, date: '31 Dec 2024', status: 'Completed',profile:'profile-images/profile3.jpeg' },
    { runner: 'John Doe', orderNumber: 'ASF6IH67JOLKV', amount: 49, date: '31 Dec 2024', status: 'Completed'  ,profile:'profile-images/profile.jpg'}
  ];

  switchTab(tab: string) {
    this.selectedTab = tab;
  }
}
