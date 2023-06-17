import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TransactionManagementComponent } from './transaction-management/transaction-management.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AddTransactionFormComponent } from './add-transaction-form/add-transaction-form.component';
import { TransactionCardComponent } from './transaction-card/transaction-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { EditTransactionComponent } from './edit-transaction/edit-transaction.component';
import { AddSavingsFprmComponent } from './add-savings-fprm/add-savings-fprm.component';
import { EditSavingsFormComponent } from './edit-savings-form/edit-savings-form.component';
import { SavingsDisplayComponent } from './savings-display/savings-display.component';
import { SavingsListComponent } from './savings-list/savings-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TotalAmountFormComponent } from './total-amount-form/total-amount-form.component';
import { DashboardSavingComponent } from './dashboard-saving/dashboard-saving.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'tracker',
    component: TransactionManagementComponent,
  },
  {
    path: 'add-transaction',
    component: AddTransactionFormComponent,
  },
  {
    path: 'edit-transaction/:id',
    component: EditTransactionComponent,
  },
  {
    path: 'savings',
    component: SavingsListComponent,
  },
  {
    path: 'add-savings',
    component: AddSavingsFprmComponent,
  },
  {
    path: 'edit-savings/:id',
    component: EditSavingsFormComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'total-amount',
    component: TotalAmountFormComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TransactionManagementComponent,
    AddTransactionFormComponent,
    TransactionCardComponent,
    EditTransactionComponent,
    AddSavingsFprmComponent,
    EditSavingsFormComponent,
    SavingsDisplayComponent,
    SavingsListComponent,
    DashboardComponent,
    TotalAmountFormComponent,
    DashboardSavingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatSidenavModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
