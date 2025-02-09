import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComplaintsService {
  getComplaintList() {
    return [
      {
        date: '05 Jan 2025',
        disputeId: '000012223',
        dispute: 'Delayed Delivery',
        orderNumber: 'ASF6IHBJOLKV',
        status: 'Closed',
      },
      {
        date: '22 Dec 2024',
        disputeId: '000012224',
        dispute: 'Missing Items',
        orderNumber: 'ASF6IHYOLKP',
        status: 'Pending',
      },
      // more date later though...
    ];
  }

  getComplaintDetails(disputeId: string) {
    return {
      disputeId,
      orderNumber: 'ASF6IHBJOLKV',
      buyerName: 'The Glass Guy',
      disputeTitle: 'Delayed Delivery',
      description:
        'Order was delayed, tried calling the runner but he was not answering my calls.',
      messages: [
        {
          sender: 'Jane Doe',
          time: '1:02 PM',
          message: 'But I sent on Tuesday',
        },
        { sender: 'John Doe', time: '1:30 PM', message: 'When can I expect?' },
        {
          sender: 'Jane Doe',
          time: '1:32 PM',
          message:
            'I apologize, I used the wrong address but I managed to fix it.',
        },
      ],
    };
  }
}
