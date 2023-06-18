import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
interface Transaction {
  id: string;
  date: Date;
  amount: number;
  category: string;
  description: string;
  transactionType: string
}
@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.css'],
})
export class TransactionCardComponent {
  @Input() transaction: Transaction = {
    id: '',
    date: new Date(),
    amount: 0,
    category: '',
    description: '',
    transactionType: ''
  };
  @Output() idToDelete: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient, private router: Router) {}
  onEdit(id: string) {
    this.router.navigate(['/edit-transaction', id]);
  }
  onDelete(id: string) {
    this.idToDelete.emit(id);
  }
  convertDate(date: Date) {
    return new Date(date).toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
}
