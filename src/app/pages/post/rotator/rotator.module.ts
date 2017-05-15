import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }             from '@angular/router';

import { RotatorComponent }         from './rotator.component';

@NgModule({
  declarations: [
    RotatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RotatorComponent
  ]
})
export class RotatorModule { }
