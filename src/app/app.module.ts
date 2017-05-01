import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './routing/routing.module'
import { AppComponent } from './app.component';
import { PlacedetailsComponent } from './pages/place-details/place-details.component';
import { PlacesListComponent } from './pages/places-list/places-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacedetailsComponent,
    PlacesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
