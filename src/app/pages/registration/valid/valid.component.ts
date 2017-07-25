import { Component, Input, OnInit }         from '@angular/core';
import { ActivatedRoute }                   from '@angular/router';
import { CommonModule }                     from '@angular/common';

import { RegistrationComponent }            from '../registration.component';

@Component({
  selector: 'valid',
  templateUrl: './valid.component.html',
  styleUrls: ['./valid.component.scss']
})
export class ValidComponent implements OnInit {
  @Input() formName;
  constructor() {}
  ngOnInit() {}
}
