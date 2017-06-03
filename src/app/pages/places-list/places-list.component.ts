import { Component }                from '@angular/core';
import { ActivatedRoute }           from '@angular/router';
import { CommonModule }             from '@angular/common';
import { Location }                 from '@angular/common';

@Component({
  selector: 'places',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent {
  places = ['paris', 'berlin'];
  constructor(
      private location: Location
    ) {}
  goBack() {
    // this.router.navigate(['/places']);
    this.location.back();
  }
}
