import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  constructor(private router: Router) {}
  moveToTracker() {
    this.router.navigate(['/tracker']);
  }

  moveToSavings() {
    this.router.navigate(['/savings']);
  }
}
