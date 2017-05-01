import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { Routes} from '@angular/router';
import { AppComponent } from '../app.component';

import { PlacedetailsComponent } from '../pages/place-details/place-details.component';
import { PlacesListComponent } from '../pages/places-list/places-list.component';



const routes: Routes = [
  // {path: '', redirectTo: 'place', pathMatch: 'full' },
  // {path: 'place', component: PlaceComponent },
  {path: 'places-list', children: [
    { path: '', component: PlacesListComponent },
    { path: ':id', component: PlacedetailsComponent }
  ] },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
