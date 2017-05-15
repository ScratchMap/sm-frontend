import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }             from '@angular/router';

import { PostComponent }            from './post.component';
import { RotatorModule }            from './rotator/rotator.module';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    RotatorModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    PostComponent
  ]
})
export class PostModule { }
