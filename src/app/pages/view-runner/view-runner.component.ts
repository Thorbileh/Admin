import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-runner',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './view-runner.component.html',
  styleUrl: './view-runner.component.css'
})
export class ViewRunnerComponent {
  user = {
    fullName: 'John Doe',
    email: 'john.doe@gmail.com',
    address: 'Qunice Auckland Park 7 Johannesburg Rd...',
    idNumber: '9909281346083',
    idCopy: 'copy2.pdf',
    image: 'image_6ty.png',
    date: '13 Jan 2025',
    subType:'Montly',
    subAmount:'49',
    profile:'profile-images/profile3.jpeg'
  };
}
