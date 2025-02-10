import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplaintsService } from '../../services/complaints.service';
import { NgFor } from '@angular/common';
import { SideBarComponent } from "../../../../components/side-bar/side-bar.component";

@Component({
  selector: 'detailed-complaint',
  standalone: true,
  imports: [NgFor, SideBarComponent],
  templateUrl: './detailed-complaint.component.html',
  styleUrl: './detailed-complaint.component.css',
})
export class DetailedComplaintComponent {
  complaintDetails: any;

  constructor(
    private route: ActivatedRoute,
    private complaintService: ComplaintsService
  ) {}

  ngOnInit() {
    const disputeId = this.route.snapshot.paramMap.get('id');
    this.complaintDetails = this.complaintService.getComplaintDetails(
      disputeId || ''
    );
  }
}
