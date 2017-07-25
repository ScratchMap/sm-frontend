import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }             from '@angular/router';
import { FormsModule,
         ReactiveFormsModule }      from '@angular/forms';

import { WritePostComponent }       from './write-post.component';
import { FroalaEditorModule,
         FroalaViewModule }         from 'angular2-froala-wysiwyg';

@NgModule({
  declarations: [
    WritePostComponent
  ],
  imports: [
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    WritePostComponent
  ]
})
export class WritePostModule { }
