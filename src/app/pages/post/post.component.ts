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
  }

  goBack() {
    this.location.back();
  }
}
