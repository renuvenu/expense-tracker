import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransactionServiceService {
  constructor(private http: HttpClient) {}

  addTransaction(data: any) {
    return this.http.post(
      `https://648a951317f1536d65e94e70.mockapi.io/expense-tracker`,
      data
    );
  }

  getTransactions() {
    return this.http.get(
      'https://648a951317f1536d65e94e70.mockapi.io/expense-tracker'
    );
  }

  editTransactions(id: string, data: any) {
    return this.http.put(
      `https://648a951317f1536d65e94e70.mockapi.io/expense-tracker/${id}`,
      data
    );
  }

  deleteTransaction(id: string) {
    return this.http.delete(
      `https://648a951317f1536d65e94e70.mockapi.io/expense-tracker/${id}`
    );
  }

  getTransactionDetail(id: string) {
    return this.http.get(
      `https://648a951317f1536d65e94e70.mockapi.io/expense-tracker/${id}`
    );
  }
}
