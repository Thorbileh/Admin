import { Component } from '@angular/core';
import { SideBarComponent } from "../../../components/side-bar/side-bar.component";
import { CommonModule } from '@angular/common';
import { ComplaintsService } from '../services/complaints.service';

@Component({
  selector: 'complaints',
  standalone: true,
  imports: [SideBarComponent,CommonModule],
  templateUrl: './complaints.component.html',
  styleUrl: './complaints.component.css'
})
export class ComplaintsComponent {

  currentPage: number = 1;
  itemsPerPage: number = 2;
  paginatedData: any[] = [];
  subscriptionsData: any;

  constructor (private complaintService: ComplaintsService) {}
  
  serviceFeeData: any;
  selectedTab: string = 'null'

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
