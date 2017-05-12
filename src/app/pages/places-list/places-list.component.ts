import { Component }                from '@angular/core';
import { ActivatedRoute }           from '@angular/router';

@Component({
  selector: 'places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent {
  places = ['paris', 'berlin'];
}
