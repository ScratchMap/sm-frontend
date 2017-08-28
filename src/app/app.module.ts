import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';

import { AppRoutingModule }         from './routing/routing.module'
import { AppComponent }             from './app.component';
import { PlaceDetailsModule }       from './pages/place-details/place-details.module';
import { PlacesListModule }         from './pages/places-list/places-list.module';
import { UserModule }               from './pages/user/user.module';
import { MapModule }                from './wigets/map/map.module';
import { PostModule }               from './pages/post/post.module';
import { RotatorModule }            from './pages/post/rotator/rotator.module';
import { PostService }              from './services/post.service';
import { UserService }              from './services/user.service';
import { StateService}              from './services/state.service';
import { RegistrationModule }       from './pages/registration/registration.module';
import { AuthorizationModule }      from './pages/authorization/authorization.module';
import { AddPostModule }            from './pages/add-post/add-post.module';
import { WritePostModule }          from './pages/add-post/write-post/write-post.module';
import { ValidModule}               from './pages/registration/valid/valid.module';
import { AuthGuard }                from './guards/auth.guard';
import { FroalaEditorModule,
         FroalaViewModule }         from 'angular2-froala-wysiwyg';
@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    RotatorModule,
    PostModule,
    MapModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PlacesListModule,
    PlaceDetailsModule,
    RegistrationModule,
    AuthorizationModule,
    ValidModule,
    AddPostModule,
    UserModule,
    WritePostModule
  ],
  providers: [AuthGuard, PostService, UserService, StateService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
