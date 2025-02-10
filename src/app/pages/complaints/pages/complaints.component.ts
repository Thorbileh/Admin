import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SideBarComponent } from '../../../components/side-bar/side-bar.component';
import { ComplaintsService } from '../services/complaints.service';

@Component({
  selector: 'complaints',
  standalone: true,
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css'],
  imports: [SideBarComponent, NgClass, NgFor],
})
export class ComplaintsComponent {
  currentPage: number = 1;
  itemsPerPage: number = 2;
  paginatedData: any[] = [];
  subscriptionsData: any = [];
  Math = Math;

  constructor(
    private complaintService: ComplaintsService,
    private router: Router
  ) {}

  ngOnInit() {
    // Fetch the data on initialization
    this.subscriptionsData = this.complaintService.getComplaintList();
    // console.log(this.subscriptionsData); testing the service
    this.updatePaginatedData();
  }

  updatePaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData = this.subscriptionsData.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePaginatedData();
  }

  navigateToDetails(disputeId: string) {
    this.router.navigate(['/complaints', disputeId]); // Go to more-detailed view for complaints
  }
}
