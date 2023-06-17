import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AddSavingsService } from '../add-savings.service';

@Component({
  selector: 'app-edit-savings-form',
  templateUrl: './edit-savings-form.component.html',
  styleUrls: ['./edit-savings-form.component.css'],
})
export class EditSavingsFormComponent {
  transactionForm = this.fb.group({
    date: [, Validators.required],
    amount: ['', Validators.required],
    name: ['', Validators.required],
    // total: [, Validators.required],
  });

  editId = '';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private savingService: AddSavingsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((r) => {
      this.editId = r['id'];
    });

    this.savingService.getSavingDetail(this.editId).subscribe((val) => {
      this.transactionForm.patchValue(val);
    });
  }

  onSubmit() {
    this.savingService
      .editSaving(this.editId, this.transactionForm.value)
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
