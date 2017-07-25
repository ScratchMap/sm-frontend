import { Component, NgModule, OnInit }      from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommonModule, Location }             from '@angular/common';
import { AgmCoreModule }            from 'angular2-google-maps/core';
import { BrowserModule }            from '@angular/platform-browser';
import { PostService }           from '../../services/post.service';
import {Injectable, NgZone} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import { StateService }            from '../../services/state.service';


@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  zoom = 8;
  lat = 50.45466;
  lng = 30.52380;
  public posts: Array<any>
  markers: marker[] = [];
  public newMarker: object;
  // marker: any;
  content: any;
  index: any;
  private subscription: any;
  link: any;


constructor(
  private route: ActivatedRoute,
  private router: Router,
  private postService: PostService,
  private location: Location,
  private stateService: StateService
  ) {
    this.postService.getAllPosts()
      .subscribe(
        (response) => {
          this.posts = response.posts;
          console.log('allposts MAP COMPONENT:', this.posts);
          for (var item in this.posts) {
            console.log(this.posts[item]);
            this.markers.push({
              lat: this.posts[item].geo.lat,
              lng: this.posts[item].geo.lng,
              label: this.posts[item].title,
              index: this.posts[item].id,
            });
          };
         },
         (err) => {
           console.error(err);
         },
         () => {}
      );

  }

  ngOnInit() {
    console.log('!!!!!!!', this.posts);
    for (var item in this.posts) {
      console.log('!!!!!!!');
    };
  }

  clickedMarker(label: string, index: number) {
      console.log(`clicked the marker: ${label || index}`);
      this.content = label;
      this.index = index;
      console.log('ID!!!', this.index);
    };

    mapClicked($event: any) {
     if (this.router.url === '/add-post') {
     this.markers.push({
       lat: $event.coords.lat,
       lng: $event.coords.lng
     });
     this.stateService.newMarker = {
       lat: $event.coords.lat,
       lng: $event.coords.lng
     };
    //  this.stateService.sendGeo(this.newMarker);
     this.goWritePost();
   }
   }

    markerDragEnd(m: marker, $event: MouseEvent) {
      console.log('dragEnd', m, $event);
    }

    goWritePost() {
      this.router.navigate(['/add-post/write-post']);
    }

}



interface marker {
  lat: number;
  lng: number;
  label?: string;
  index?: string;
  draggable?: boolean;
}
