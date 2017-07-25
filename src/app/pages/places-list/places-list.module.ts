import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }           from '@angular/router';

import { PlacesListComponent }      from './places-list.component';

@NgModule({
  declarations: [
    PlacesListComponent
  ],
  imports: [

    CommonModule,
    RouterModule
  ],
  exports: [
    PlacesListComponent
  ]
})
export class PlacesListModule { }
