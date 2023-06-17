import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TransactionServiceService } from '../transaction-service.service';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.css'],
})
export class EditTransactionComponent {
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

  editId: string = '';
  showLoader = true

  ngOnInit() {
    this.route.params.subscribe((r) => {
      this.editId = r['id'];
    });

    this.transactionService
      .getTransactionDetail(this.editId)
      .subscribe((val) => {
        this.transactionForm.patchValue(val);
        this.showLoader = false
      });
  }

  onSubmit() {
    this.transactionService
      .editTransactions(this.editId, this.transactionForm.value)
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

  get transactionError() {
    return this.transactionForm.get('transactionType');
  }
}
