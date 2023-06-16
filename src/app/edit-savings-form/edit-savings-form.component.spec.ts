import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSavingsFormComponent } from './edit-savings-form.component';

describe('EditSavingsFormComponent', () => {
  let component: EditSavingsFormComponent;
  let fixture: ComponentFixture<EditSavingsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSavingsFormComponent]
    });
    fixture = TestBed.createComponent(EditSavingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
