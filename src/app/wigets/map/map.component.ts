import { Component }                from '@angular/core';
import { ActivatedRoute }           from '@angular/router';
import { CommonModule }             from '@angular/common';
import { AgmCoreModule }            from 'angular2-google-maps/core';
import { BrowserModule }            from '@angular/platform-browser';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  zoom = 8;
  lat = 50.45466;
  lng = 30.52380;
}
