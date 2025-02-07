import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SideBarComponent } from '../../../components/side-bar/side-bar.component';
import { TotalEarningsService } from '../services/total-earnings.service';

@Component({
  selector: 'total-earnings',
  standalone: true,
  imports: [CommonModule, SideBarComponent],
  templateUrl: './total-earnings.component.html',
  styleUrls: ['./total-earnings.component.css'],
})
export class TotalEarningsComponent {
  selectedTab: string = 'subscriptions';
  subscriptionsData: any[] = [];
  serviceFeeData: any[] = [];

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
  }
}
