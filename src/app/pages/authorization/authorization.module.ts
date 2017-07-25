import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }             from '@angular/router';
import { FormsModule,
         ReactiveFormsModule }      from '@angular/forms';

import { AuthorizationComponent }     from './authorization.component';
import { ValidModule}     from '../registration/valid/valid.module';

@NgModule({
  declarations: [
    AuthorizationComponent
  ],
  imports: [
    ValidModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AuthorizationComponent
  ]
})
export class AuthorizationModule { }
