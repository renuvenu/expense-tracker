import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransactionServiceService {
  constructor(private http: HttpClient) {}

  addTransaction(data: any) {
    return this.http.post(
      `https://648c6cf98620b8bae7ece374.mockapi.io/transaction`,
      data
    );
  }

  getTransactions() {
    return this.http.get(
      'https://648c6cf98620b8bae7ece374.mockapi.io/transaction'
    );
  }

  editTransactions(id: string, data: any) {
    return this.http.put(
      `https://648c6cf98620b8bae7ece374.mockapi.io/transaction/${id}`,
      data
    );
  }

  deleteTransaction(id: string) {
    return this.http.delete(
      `https://648c6cf98620b8bae7ece374.mockapi.io/transaction/${id}`
    );
  }

  getTransactionDetail(id: string) {
    return this.http.get(
      `https://648c6cf98620b8bae7ece374.mockapi.io/transaction/${id}`
    );
  }
}
