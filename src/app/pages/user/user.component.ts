import { Component, OnDestroy }     from '@angular/core';
import { ActivatedRoute }           from '@angular/router';
import { CommonModule }             from '@angular/common';
import { Location }                 from '@angular/common';
import { StateService }             from '../../services/state.service';
import { UserService }              from '../../services/user.service';
import { PostService }              from '../../services/post.service';
import { Observable }               from 'rxjs/Observable';



@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  public isAuthorized$: Observable<any>;
  public user: object;
  public user_posts: Array<any>;

  constructor(
      private location: Location,
      private stateService: StateService,
      private userService: UserService,
      private postService: PostService,
    ) {
      this.isAuthorized$ = this.stateService.messageEmitted$;
      this.userService.getUser()
        .subscribe(
          (response) => {
            this.user = response;
            console.log(this.user)
           },
           (err) => {
             console.error(err);
           },
           () => { }
        );

     this.postService.getUserPosts()
       .subscribe(
         (response) => {
           console.log('ответ', response)
           this.user_posts = response.posts;
           console.log('userposts:', this.user_posts)
          },
          (err) => {
            console.error(err);
          },
          () => {}
       );
    console.log(this.user_posts);
  }

}
