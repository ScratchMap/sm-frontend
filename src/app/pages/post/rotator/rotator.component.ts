import { Component, Input, OnInit }         from '@angular/core';
import { ActivatedRoute }                   from '@angular/router';
import { CommonModule }                     from '@angular/common';
import { PostComponent }                    from '../post.component';

@Component({
  selector: 'rotator',
  templateUrl: './rotator.component.html',
  styleUrls: ['./rotator.component.scss']
})
export class RotatorComponent implements OnInit {
  @Input() imgs;

  constructor() {
    console.log(this.imgs);
  }

  ngOnInit() {
    console.log(this.imgs);
  }
  resize() {
    console.log('click!');
    var currentStyles: {};
    var min = {
      width: '100px',
      height: '100px'
    }
  }
}
