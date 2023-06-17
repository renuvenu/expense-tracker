import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddSavingsService } from '../add-savings.service';

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
      this.savings = val;
      this.savings.length > 0
        ? (this.showAddButton = false)
        : (this.showAddButton = true);
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
