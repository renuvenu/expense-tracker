import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalAmountFormComponent } from './total-amount-form.component';

describe('TotalAmountFormComponent', () => {
  let component: TotalAmountFormComponent;
  let fixture: ComponentFixture<TotalAmountFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalAmountFormComponent]
    });
    fixture = TestBed.createComponent(TotalAmountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
