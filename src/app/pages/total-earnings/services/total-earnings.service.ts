import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotalEarningsService {

  constructor() {}

  // Mock for Subscriptions
  getSubscriptions(): Observable<any[]> {
    return of([
      { runner: 'John Doe', type: 'Monthly', proof: 'tanklas.pdf', amount: 49.00, date: '31 Dec 2024' },
      { runner: 'Jane Doe', type: 'Yearly', proof: 'proof.pdf', amount: 499.00, date: '31 Dec 2024' },
    ]);
  }

  // Moc for Service Fees
  getServiceFees(): Observable<any[]> {
    return of([
      { orderNumber: 'ASFHBHDUKLV', amount: 455.00, fee: 227.50, date: '31 Dec 2024' },
      { orderNumber: 'ASFHBHDUKLV', amount: 920.00, fee: 45.00, date: '31 Dec 2024' },
    ]);
  }
}
