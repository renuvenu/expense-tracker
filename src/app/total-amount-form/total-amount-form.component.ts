import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TotalAmountService } from '../total-amount.service';
@Component({
  selector: 'app-total-amount-form',
  templateUrl: './total-amount-form.component.html',
  styleUrls: ['./total-amount-form.component.css'],
})
export class TotalAmountFormComponent {
  totalAmountForm = this.fb.group({
    amount: ['', Validators.required],
  });
  amount: any
  ngOnInit() {
    this.amountService.getTotalAmount().subscribe((val) => {
      this.amount = val
      this.totalAmountForm.patchValue(this.amount[0])
    });
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private amountService: TotalAmountService
  ) {}

  onSubmit() {
    this.amountService
      .editTotalAmount('1', this.totalAmountForm.value)
      .subscribe((val) => {
        this.totalAmountForm.reset();
        this.router.navigate(['/dashboard']);
      });
  }

  get amountError() {
    return this.totalAmountForm.get('amount');
  }
}
