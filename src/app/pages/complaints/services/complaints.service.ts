import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {

  constructor() {}

   // Mock for Complaints. 
    getComplaints(): Observable<any[]> {
      return of([
        {date: '13 Jun 2022', DisputeID: '000012223', Dispute: 'Not Delivered', OrderNumber : 'ASF6IHBIJOLKV', status: 'closed'}
      ]);
    }
  

}
