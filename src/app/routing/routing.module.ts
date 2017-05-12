import { NgModule }               from '@angular/core';
import { RouterModule }           from '@angular/router';
import { Routes}                  from '@angular/router';

import { AppComponent }           from '../app.component';
import { PlaceDetailsComponent }  from '../pages/place-details/place-details.component';
import { PlacesListComponent }       from '../pages/places-list/places-list.component';



const routes: Routes = [
  { path: 'places', children: [
    { path: '', component: PlacesListComponent },
    { path: ':id', component: PlaceDetailsComponent }
  ] },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
