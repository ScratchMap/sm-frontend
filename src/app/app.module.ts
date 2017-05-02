import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';

import { AppRoutingModule }         from './routing/routing.module'
import { AppComponent }             from './app.component';
import { PlaceDetailsModule }       from './pages/place-details/place-details.module';
import { PlacesListModule }         from './pages/places-list/places-list.module';

@NgModule({
  declarations: [
    AppComponent,


],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PlacesListModule,
    PlaceDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
