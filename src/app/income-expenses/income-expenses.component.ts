import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables, ChartItem } from 'chart.js';
import { TransactionServiceService } from '../transaction-service.service';
import { AddSavingsService } from '../add-savings.service';
Chart.register(...registerables);

interface Transaction {
  id: string;
  date: Date;
  amount: number;
  category: string;
  description: string;
  transactionType: string;
}

interface Savings {
  name: string;
  date: Date;
  amount: number;
  total: number;
}
@Component({
  selector: 'app-income-expenses',
  templateUrl: './income-expenses.component.html',
  styleUrls: ['./income-expenses.component.css'],
})
export class IncomeExpensesComponent {
  @ViewChild('statisticsChart', { static: true })
  chartCanvas!: ElementRef<HTMLCanvasElement>;
  statisticalData: number[] = []; // Example data
  savings: any;
  transactions: any;
  datas: String[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  constructor(
    private transactionService: TransactionServiceService,
    private savingsService: AddSavingsService
  ) {}
  ngOnInit() {
    // this.setAllData();
  }
  ngAfterViewInit() {
    let i = 0;
    this.savingsService.getSaving().subscribe((val) => {
      this.savings = val as Array<Savings>;
      this.transactionService.getTransactions().subscribe((val) => {
        this.transactions = val as Array<Transaction>;
        this.savings.forEach((val: Savings) => {
          i++;
          let trans = this.transactions.filter(
            (transaction: Transaction) =>
              new Date(transaction.date).getMonth() ===
              new Date(val.date).getMonth()
          );
          let total = val.total;
          let tot = val.total;
          this.datas[new Date(val.date).getMonth()] =
            this.datas[new Date(val.date).getMonth()] +
            '(' +
            (tot as any).toLocaleString('en-US') +
            ')';
          trans.forEach((transaction: Transaction) => {
            if (transaction.transactionType === 'Credit') {
              total += transaction.amount;
            } else {
              total -= transaction.amount;
            }
          });

          this.statisticalData[new Date(val.date).getMonth()] = tot - total;

          if (i === this.savings.length) {
            this.setAllData();
          }
        });
        // console.log(this.statisticalData);
      });
    });
  }

  setAllData() {
    const ctx = this.chartCanvas.nativeElement.getContext(
      '2d'
    ) as CanvasRenderingContext2D | null;
    if (!ctx) {
      // Handle the case where the context is null (e.g., canvas element not found)
      console.error('Failed to get canvas context');
      return;
    }

    const statisticsChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [...this.datas],
        datasets: [
          {
            label: 'Expenses',
            data: this.statisticalData,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
