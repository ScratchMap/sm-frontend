import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }           from '@angular/router';

import { MapComponent }      from './map.component';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule  { }
