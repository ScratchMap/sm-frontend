import { Component, Output }        from '@angular/core';
import { ActivatedRoute }           from '@angular/router';
import { CommonModule }             from '@angular/common';
import { Location }                 from '@angular/common';
import { FormGroup,
         FormControl,
         Validators }                from '@angular/forms';
import { PostService }           from '../../services/post.service';

@Component({
  selector: 'place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.scss']
})
export class PlaceDetailsComponent {
  @Output()
  id: string;
  post: object;

  private subscription: any;

  constructor(
      private route: ActivatedRoute,
      private location: Location,
      private postService: PostService,
    ) {
    this.subscription = this.route.params.subscribe(
      ( params: any ) => {
        this.id = params['id'];
      },
    );
    this.postService.getPostById(this.id)
      .subscribe(
        (response) => {
          this.post = response.post;
          console.log('наш пост:', this.post)
         },
         (err) => {
           console.error(err);
         },
         () => {}
      );
  }


  goBack() {
    this.location.back();
  }
}
