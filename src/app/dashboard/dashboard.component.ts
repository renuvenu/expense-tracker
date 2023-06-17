import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TotalAmountService } from '../total-amount.service';
import { TransactionServiceService } from '../transaction-service.service';

interface Transaction {
  id: string;
  date: Date;
  amount: number;
  category: string;
  description: string;
  transactionType: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(
    private router: Router,
    private totalAmountService: TotalAmountService,
    private transactionService: TransactionServiceService
  ) {}
  totalBalance: any;
  balance = 0;
  transactionDetails: any;
  message: string = '';

  ngOnInit() {
    this.totalAmountService.getTotalAmount().subscribe((val) => {
      this.totalBalance = val;
      this.transactionService.getTransactions().subscribe((val) => {
        this.transactionDetails = val;
        this.getCurrentBalance();
        this.transactionDetails.reverse();
      });
    });
  }
  addTotalAmount() {
    this.router.navigate(['/total-amount']);
  }

  getCurrentBalance() {
    let amount = 0;
    this.transactionDetails.forEach((val: any) => {
      if (val.transactionType === 'Credit') {
        amount += val.amount;
      } else {
        amount -= val.amount;
      }
    });
    this.balance = this.totalBalance[0]?.amount + amount;
  }

  onDelete() {}
}
