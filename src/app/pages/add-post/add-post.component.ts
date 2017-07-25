import { Component, Output }        from '@angular/core';
import { ActivatedRoute }           from '@angular/router';
import { CommonModule }             from '@angular/common';
import { Location }                 from '@angular/common';
;



@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  constructor(
      private location: Location
    ) {}

  goBack() {
    this.location.back();
  }
}
