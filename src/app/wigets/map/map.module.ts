import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }             from '@angular/router';
import { BrowserModule }            from '@angular/platform-browser';
import { AgmCoreModule }            from 'angular2-google-maps/core';
import { MapComponent }             from './map.component';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAwoxQsgGMjzq1mhA5P-GpIlgMYxOdJFq8'
    }),
    CommonModule,
    RouterModule
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule  { }
