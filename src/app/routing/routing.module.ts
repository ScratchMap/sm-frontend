import { NgModule }               from '@angular/core';
import { RouterModule }           from '@angular/router';
import { Routes }                 from '@angular/router';

import { AppComponent }           from '../app.component';
import { PlaceDetailsComponent }  from '../pages/place-details/place-details.component';
import { PlacesListComponent }    from '../pages/places-list/places-list.component';
import { MapComponent }           from '../wigets/map/map.component';
import { PostComponent }          from '../pages/post/post.component';
import { RegistrationComponent }  from '../pages/registration/registration.component';



const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'places', children: [
    { path: '', component: PlacesListComponent },
    { path: ':id',children: [
      { path: '', component: PlaceDetailsComponent },
      { path: 'posts', children: [
        { path: '', component: PostComponent },
        { path: ':postid', component: PostComponent }
      ]}
    ]}
  ]},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
