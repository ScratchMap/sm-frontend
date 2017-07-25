import { Component, Output }        from '@angular/core';
import { ActivatedRoute }           from '@angular/router';
import { CommonModule }             from '@angular/common';
import { Location }                 from '@angular/common';
import { PostService }              from '../../services/post.service';



@Component({
  selector: 'places',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent {
  places = ['paris', 'berlin'];
  places2: Array<any>;
  constructor(
      private location: Location,
      private postService: PostService,
    ) {
this.postService.getAllPosts()
  .subscribe(
    (response) => {
      this.places2 = response.posts;
      console.log('allposts:', this.places2)
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
