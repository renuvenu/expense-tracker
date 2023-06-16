import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
interface Saving {
  id: string;
  date: Date;
  amount: number;
  name: '';
  total: number;
}
@Component({
  selector: 'app-savings-display',
  templateUrl: './savings-display.component.html',
  styleUrls: ['./savings-display.component.css'],
})
export class SavingsDisplayComponent {
  @Input() savings: Saving = {
    id: '',
    date: new Date(),
    amount: 0,
    name: '',
    total: 0,
  };
  @Output() idToDelete: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient, private router: Router) {}
  onEdit(id: string) {
    this.router.navigate(['/edit-savings', id]);
  }
  onDelete(id: string) {
    this.idToDelete.emit(id);
  }
  convertDate(date: Date) {
    return new Date(date).toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
}
