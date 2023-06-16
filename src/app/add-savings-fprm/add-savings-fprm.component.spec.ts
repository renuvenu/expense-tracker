import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSavingsFprmComponent } from './add-savings-fprm.component';

describe('AddSavingsFprmComponent', () => {
  let component: AddSavingsFprmComponent;
  let fixture: ComponentFixture<AddSavingsFprmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSavingsFprmComponent]
    });
    fixture = TestBed.createComponent(AddSavingsFprmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
