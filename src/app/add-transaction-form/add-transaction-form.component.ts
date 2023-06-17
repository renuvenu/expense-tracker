import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionServiceService } from '../transaction-service.service';

@Component({
  selector: 'app-add-transaction-form',
  templateUrl: './add-transaction-form.component.html',
  styleUrls: ['./add-transaction-form.component.css'],
})
export class AddTransactionFormComponent {
  transactionForm = this.fb.group({
    date: [, Validators.required],
    amount: ['', Validators.required],
    category: ['', Validators.required],
    description: ['', Validators.required],
    transactionType: ['', Validators.required],
  });

  categories = [
    {
      value: 'food',
    },
    {
      value: 'rent',
    },
    {
      value: 'entertainment',
    },
  ];

  transactionTypes = [
    {
      value: 'Credit',
    },
    {
      value: 'Debit',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private transactionService: TransactionServiceService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.transactionService
      .addTransaction(this.transactionForm.value)
      .subscribe((val) => {
        this.transactionForm.reset();
        this.router.navigate(['/tracker']);
      });
  }

  get dateError() {
    return this.transactionForm.get('date');
  }

  get amountError() {
    return this.transactionForm.get('amount');
  }

  get categoryError() {
    return this.transactionForm.get('category');
  }

  get descriptionError() {
    return this.transactionForm.get('description');
  }

  get transactionError() {
    return this.transactionForm.get('transactionType');
  }
}
