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
      { runner: 'Jane Doe', type: 'Yearly', proof: 'proof.pdf', amount: 499.00, date: '21 Nov 2024' },
      {runner: 'Amukelani Hlungz', type: 'Monthly', proof: 'capitec.pdf', amount: 49.00, date: '13 Jan 2025'}
    ]);
  }

  // Moc for Service Fees
  getServiceFees(): Observable<any[]> {
    return of([
      { orderNumber: 'ASFHBHDUKLV', amount: 455.00, fee: 227.50, date: '31 Dec 2024' },
      { orderNumber: 'ASFHBHDUKLV', amount: 920.00, fee: 45.00, date: '31 Dec 2024' },
      { orderNumber: 'HMTWHWCWAO', amount: 345.00, fee: 45.00, date: '12 Jan 2025' },
    ]);
  }
}
