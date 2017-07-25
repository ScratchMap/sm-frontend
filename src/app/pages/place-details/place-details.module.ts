import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }           from '@angular/router';
import { FormsModule,
         ReactiveFormsModule }      from '@angular/forms';

import { PlaceDetailsComponent }      from './place-details.component';
import { FroalaEditorModule,
         FroalaViewModule }         from 'angular2-froala-wysiwyg';
@NgModule({
  declarations: [
    PlaceDetailsComponent
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
    PlaceDetailsComponent
  ]
})
export class PlaceDetailsModule { }
