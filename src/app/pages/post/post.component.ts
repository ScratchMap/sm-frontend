import { Component }                                        from '@angular/core';
import { ActivatedRoute }                                   from '@angular/router';
import { Location }                                         from '@angular/common';
import { CommonModule }                                     from '@angular/common';

import { PostService }                                      from '../../services/post.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  postid: string;
  private subscription: any;
  private response: any;

  constructor(
      private route: ActivatedRoute,
      private location: Location,
      private postService: PostService
    ) {

    this.response = postService.getPost3();
    this.postService.getPost()
      .then(response => console.log(response));

    this.postService.getPost2()
      .subscribe(
        (response) => console.log(response),
        (err) => console.error(err),
        () => console.log('done')
      );

    this.subscription = this.route.params.subscribe(
      ( params: any ) => {;
        this.postid = params['postid'];
      },
    );
  }

  goBack() {
    this.location.back();
  }
}
