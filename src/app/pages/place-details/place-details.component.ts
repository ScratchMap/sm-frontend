import { Component }                from '@angular/core';
import { ActivatedRoute }           from '@angular/router';

@Component({
  selector: 'place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.scss']
})
export class PlaceDetailsComponent {
  id: string;

  private subscription: any;

  constructor( private route: ActivatedRoute ) {
    this.subscription = this.route.params.subscribe(
      ( params: any ) => {
        this.id = params['id'];
      }
    );
  }
}
