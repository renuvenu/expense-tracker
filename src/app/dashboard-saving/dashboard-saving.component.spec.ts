import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSavingComponent } from './dashboard-saving.component';

describe('DashboardSavingComponent', () => {
  let component: DashboardSavingComponent;
  let fixture: ComponentFixture<DashboardSavingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSavingComponent]
    });
    fixture = TestBed.createComponent(DashboardSavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
