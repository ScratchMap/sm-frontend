import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }             from '@angular/router';
import { FormsModule,
         ReactiveFormsModule }      from '@angular/forms';

import { RegistrationComponent }     from './registration.component';
import { ValidModule}     from './valid/valid.module';

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    ValidModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
