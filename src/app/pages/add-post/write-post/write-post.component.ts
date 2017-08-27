import { Component, Output }      from '@angular/core';
import { ActivatedRoute, Router }           from '@angular/router';
import { CommonModule, Location }             from '@angular/common';
import { AgmCoreModule }            from 'angular2-google-maps/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormGroup,
         FormControl,
         Validators }                from '@angular/forms';
import { PostService }           from '../../../services/post.service';
import { Observable }               from 'rxjs/Observable';
import { StateService }             from '../../../services/state.service';





@Component({
  selector: 'write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.scss']
})
export class WritePostComponent {
  public geo$: Observable<any>;
  postForm: FormGroup;
  postData: object;
  newMarker: Array<any>;


  constructor(
      private location: Location,
      private postService: PostService,
      private stateService: StateService,
      private router: Router
    ) {
      this.newMarker = [];
    this.postForm = new FormGroup({
      header: new FormControl('', Validators.compose([ ])),
      body: new FormControl('', Validators.compose([ ]))
      });
  }


  goBack() {
    this.location.back();
  }
  submitForm() {
    this.postData = {
      post:
    {
      data: {
        title: this.postForm.value.header,
        body: this.postForm.value.body
      },
      geo: this.stateService.newMarker}
    };
    this.postService.sendPostData(this.postData)
      .subscribe(
        (response) => console.log(response),
        (err) => console.error(err),
        () => this.router.navigate(['/add-post'])
      );
  }
}
