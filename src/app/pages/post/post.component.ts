import { Component }                                        from '@angular/core';
import { ActivatedRoute }                                   from '@angular/router';
import { Location }                                         from '@angular/common';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  data = 'ITS MAST BE POST'
  postid: string;
  private subscription: any;

  constructor(
      private route: ActivatedRoute,
      private location: Location
    ) {
    this.subscription = this.route.params.subscribe(
      ( params: any ) => {
        this.postid = params['postid'];
      },
    );
  }

  goBack() {
    this.location.back();
  }
}
