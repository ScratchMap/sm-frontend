import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent {
  title = 'Paris!';
  // id: string;
  //
  // private subscription: any;
  //
  // constructor( private route: ActivatedRoute ) {
  //   this.subscription = this.route.params.subscribe(
  //     ( params: any ) => {
  //       this.id = params['id'];
  //     }
  //   );
  // }
}
