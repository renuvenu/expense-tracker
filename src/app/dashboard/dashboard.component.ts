import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TotalAmountService } from '../total-amount.service';
import { TransactionServiceService } from '../transaction-service.service';
import { AddSavingsService } from '../add-savings.service';

interface Transaction {
  id: string;
  date: Date;
  amount: number;
  category: string;
  description: string;
  transactionType: string;
}

interface Savings {
  name: string,
  date: Date,
  amount: number,
  total: number
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
    private savingsService: AddSavingsService,
    private transactionService: TransactionServiceService
  ) {}
  totalBalance: any;
  balance = 0;
  transactionDetails: any;
  message: string = '';

  ngOnInit() {
    this.savingsService.getSaving().subscribe((val) => {
      let amount = val as Array<Object>;
      console.log(amount);

      this.totalBalance = (amount.find((data: any) => new Date(data.date).getMonth() === new Date().getMonth()) as Savings).total
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
    this.balance = this.totalBalance + amount;
  }

  onDelete() {}
}
