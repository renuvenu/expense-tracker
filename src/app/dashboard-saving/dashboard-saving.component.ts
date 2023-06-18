import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AddSavingsService } from '../add-savings.service';

interface Savings {
  name: string;
  date: Date;
  amount: number;
  total: number;
}

@Component({
  selector: 'app-dashboard-saving',
  templateUrl: './dashboard-saving.component.html',
  styleUrls: ['./dashboard-saving.component.css'],
})
export class DashboardSavingComponent {
  @Input() balanceAmount: number = 0;
  constructor(
    private router: Router,
    private savingService: AddSavingsService
  ) {}

  savings: any;
  message = '';

  ngOnInit() {
    this.getSavings();
  }

  getSavings() {
    this.savingService.getSaving().subscribe((val) => {
      let amount = val as Array<Savings>;
      this.savings = amount.find(
        (val) => new Date(val.date).getMonth() === new Date().getMonth()
      );
    });
  }
}
