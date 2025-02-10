import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-runners',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './runners.component.html',
  styleUrl: './runners.component.css'
})
export class RunnersComponent {
  selectedTab: string = 'open'; 
  searchQuery: string = ''; 

  openTransactions = [
    { runner: 'John Doe', date: '12 Jan 2025', status: 'Pending' ,profile:'profile-images/profile.jpg' },
    { runner: 'John Doe', date: '02 Jan 2025', status: 'Pending' ,profile:'profile-images/profile.jpg' },
  ];

  closedTransactions = [
    { runner: 'Jane Doe', orderNumber: 'ASF6IH45JOLKV', amount: 499, date: '31 Dec 2024', status: 'Completed',profile:'profile-images/profile3.jpeg' },
    { runner: 'John Doe', orderNumber: 'ASF6IH67JOLKV', amount: 49, date: '31 Dec 2024', status: 'Completed'  ,profile:'profile-images/profile.jpg'}
  ];

  switchTab(tab: string) {
    this.selectedTab = tab;
  }
}
