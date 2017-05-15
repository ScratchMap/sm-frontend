import { Component }                                        from '@angular/core';
import { ActivatedRoute }                                   from '@angular/router';
import { Location }                                         from '@angular/common';
import { CommonModule }                                     from '@angular/common';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  postid: string;
  private subscription: any;

  response = {
    postid: 'post1',
    imgs: [
      '../../../assets/rotator_imgs/1.jpg',
      '../../../assets/rotator_imgs/2.jpg',
      '../../../assets/rotator_imgs/3.jpg',
      '../../../assets/rotator_imgs/4.jpg'
    ],
    postData: 'TOP FASHION RUNWAY PHOTOGRAPHY BASED IN THE MIDDLE EAST & EUROPE',
    metaData : {
      place: 'paris',
      tags: ['paris', 'france', 'travel'],
      geo : { lat: -25.363, lng: 131.044 }
      }
  };

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
