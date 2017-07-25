import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }             from '@angular/router';

import { ValidComponent }            from './valid.component';

@NgModule({
  declarations: [
    ValidComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ValidComponent
  ]
})
export class ValidModule { }
