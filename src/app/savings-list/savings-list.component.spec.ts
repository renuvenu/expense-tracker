import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsListComponent } from './savings-list.component';

describe('SavingsListComponent', () => {
  let component: SavingsListComponent;
  let fixture: ComponentFixture<SavingsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavingsListComponent]
    });
    fixture = TestBed.createComponent(SavingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
