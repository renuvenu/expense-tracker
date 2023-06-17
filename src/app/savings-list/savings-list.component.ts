import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddSavingsService } from '../add-savings.service';
interface Savings {
  name: string;
  date: Date;
  amount: number;
  total: number;
}
@Component({
  selector: 'app-savings-list',
  templateUrl: './savings-list.component.html',
  styleUrls: ['./savings-list.component.css'],
})
export class SavingsListComponent {
  constructor(
    private router: Router,
    private savingService: AddSavingsService
  ) {}

  savings: any;
  showAddButton = true;

  ngOnInit() {
    this.getSavings();
  }

  getSavings() {
    this.savingService.getSaving().subscribe((val) => {
      this.savings = val as Array<Savings>;
      this.savings = this.savings.sort((a: Savings, b: Savings) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      this.savings.forEach((val: Savings) => {
        if (new Date(val.date).getMonth() === new Date().getMonth()) {
          this.showAddButton = false;
        }
      });
    });
  }

  addSavings() {
    this.router.navigate(['/add-savings']);
  }

  onDelete(id: string) {
    this.savingService.deleteSaving(id).subscribe((val) => {
      this.getSavings();
    });
  }
}
