import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TotalEarningsService } from '../services/total-earnings.service';

@Component({
  selector: 'earnings',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './total-earnings.component.html',
  styleUrls: ['./total-earnings.component.css'],
})
export class TotalEarningsComponent {
  selectedTab: string = 'subscriptions';
  subscriptionsData: any[] = [];
  serviceFeeData: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 2;
  paginatedData: any[] = [];

  constructor(private earningsService: TotalEarningsService) {}

  ngOnInit() {
    // Fetch subscriptions data
    this.earningsService.getSubscriptions().subscribe((data) => {
      this.subscriptionsData = data;
    });

    // Fetch service fees data
    this.earningsService.getServiceFees().subscribe((data) => {
      this.serviceFeeData = data;
    });
  }

  switchTab(tab: string) {
    this.selectedTab = tab;
    this.currentPage = 1; // Reset to first page on tab switch
    this.updatePaginatedData();
  }

  updatePaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData =
      this.selectedTab === 'subscriptions'
        ? this.subscriptionsData.slice(startIndex, endIndex)
        : this.serviceFeeData.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePaginatedData();
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
      this.updatePaginatedData();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedData();
    }
  }

  totalPages(): number {
    const data =
      this.selectedTab === 'subscriptions'
        ? this.subscriptionsData
        : this.serviceFeeData;
    return Math.ceil(data.length / this.itemsPerPage);
  }
}
