import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AddSavingsService } from '../add-savings.service';

@Component({
  selector: 'app-add-savings-fprm',
  templateUrl: './add-savings-fprm.component.html',
  styleUrls: ['./add-savings-fprm.component.css'],
})
export class AddSavingsFprmComponent {
  transactionForm = this.fb.group({
    date: [, Validators.required],
    amount: ['', Validators.required],
    name: ['', Validators.required],
    total: [, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private savingService: AddSavingsService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.savingService
      .addSaving(this.transactionForm.value)
      .subscribe((val) => {
        this.transactionForm.reset();
        this.router.navigate(['/savings']);
      });
  }

  get dateError() {
    return this.transactionForm.get('date');
  }

  get amountError() {
    return this.transactionForm.get('amount');
  }

  get nameError() {
    return this.transactionForm.get('name');
  }

  get totalError() {
    return this.transactionForm.get('total');
  }
}
