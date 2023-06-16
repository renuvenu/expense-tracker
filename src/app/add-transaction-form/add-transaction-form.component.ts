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

    // this.moviesService
    //   .updateMovie(this.editMovieId, this.transactionForm.value)
    //   .subscribe((val) => this.router.navigate(['/movies']));
    // this.transactionForm.reset();
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
}
