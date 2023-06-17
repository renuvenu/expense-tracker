import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TotalAmountService {
  constructor(private http: HttpClient) {}

  addTotalAmount(data: any) {
    return this.http.post(
      `https://648c27378620b8bae7ec55df.mockapi.io/total-amount`,
      data
    );
  }

  getTotalAmount() {
    return this.http.get(
      'https://648c27378620b8bae7ec55df.mockapi.io/total-amount'
    );
  }

  editTotalAmount(id: string, data: any) {
    return this.http.put(
      `https://648c27378620b8bae7ec55df.mockapi.io/total-amount/${id}`,
      data
    );
  }

  deleteTotalAmount(id: string) {
    return this.http.delete(
      `https://648c27378620b8bae7ec55df.mockapi.io/total-amount/${id}`
    );
  }

  getTotalAmountDetail(id: string) {
    return this.http.get(
      `https://648c27378620b8bae7ec55df.mockapi.io/total-amount/${id}`
    );
  }
}
