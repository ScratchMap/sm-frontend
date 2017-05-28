import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }           from '@angular/router';

import { PlaceDetailsComponent }      from './place-details.component';

@NgModule({
  declarations: [
    PlaceDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PlaceDetailsComponent
  ]
})
export class PlaceDetailsModule { }
