import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }             from '@angular/router';

import { AddPostComponent }         from './add-post.component';

@NgModule({
  declarations: [
    AddPostComponent
  ],
  imports: [

    CommonModule,
    RouterModule
  ],
  exports: [
    AddPostComponent
  ]
})
export class AddPostModule { }
