import { CommonModule, } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
  activeTab: string = 'open';
  searchQuery: string = '';
  currentPage: number = 1;

  openTransactions = [
    { runner: 'John Doe', orderNumber: 'ASF8IH8UOLKV', totalAmount: 'R 900.00', date: '08 Jan 2025', status: 'Paid' },
    // Add more open transactions as needed
  ];

  closedTransactions = [
    { runner: 'John Doe', orderNumber: 'ASF8IH4SJOLKV', totalAmount: 'R 379.00', date: '18 Dec 2024', status: 'Paid' },
    // Add more closed transactions as needed
  ];

  filterTransactions() {
    // Implement filtering logic based on searchQuery
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    this.currentPage++;
  }
}
