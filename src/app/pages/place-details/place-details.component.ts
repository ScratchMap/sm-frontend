import { Component }                                        from '@angular/core';
import { ActivatedRoute }                           from '@angular/router';
import { Location }                                         from '@angular/common';

@Component({
  selector: 'place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.scss']
})
export class PlaceDetailsComponent {
  id: string;
  private subscription: any;

  constructor(
      private route: ActivatedRoute,
      private location: Location
    ) {
    this.subscription = this.route.params.subscribe(
      ( params: any ) => {
        this.id = params['id'];
      },
    );
  }

  goBack() {
    // this.router.navigate(['/places']);
    this.location.back();
  }
}
