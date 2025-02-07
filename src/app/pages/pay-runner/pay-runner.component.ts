import { Component } from '@angular/core';
import { SideBarComponent } from "../../components/side-bar/side-bar.component";

@Component({
  selector: 'app-pay-runner',
  standalone: true,
  imports: [SideBarComponent],
  templateUrl: './pay-runner.component.html',
  styleUrl: './pay-runner.component.css'
})
export class PayRunnerComponent {
  user = {
    fullName: 'John Doe',
    email: 'john.doe@gmail.com',
    address: 'Qunice Auckland Park 7 Johannesburg Rd...',
    cardHolder: 'Mr J Doe',
    accountNumber: '106734789',
    bankName: 'FNB',
    totalAmount: 'R900',
    profile:'profile-images/profile3.jpeg'
  };
}
