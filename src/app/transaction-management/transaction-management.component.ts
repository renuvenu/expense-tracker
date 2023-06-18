import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionServiceService } from '../transaction-service.service';
import { catchError, concatMap } from 'rxjs';

@Component({
  selector: 'app-transaction-management',
  templateUrl: './transaction-management.component.html',
  styleUrls: ['./transaction-management.component.css'],
})
export class TransactionManagementComponent {
  constructor(
    private router: Router,
    private transactionService: TransactionServiceService
  ) {}
  transactions: any;
  ngOnInit() {
    this.getTrans();
  }
  gotoAddTransaction() {
    this.router.navigate(['/add-transaction']);
  }

  getTrans() {
    this.transactionService.getTransactions().subscribe((val) => {
      this.transactions = val;
      this.transactions = this.transactions.sort((a: any, b: any) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    });
  }

  onDelete(id: string) {
    this.transactionService.deleteTransaction(id).subscribe((val) => {
      this.getTrans();
    });
  }
}
