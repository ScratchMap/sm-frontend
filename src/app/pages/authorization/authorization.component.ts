import { Component, Output }        from '@angular/core';
import { ActivatedRoute }           from '@angular/router';
import { CommonModule }             from '@angular/common';
import { Location }                 from '@angular/common';
import { FormGroup,
         FormControl,
         Validators }                from '@angular/forms';
import { UserService }           from '../../services/user.service';

@Component({
  selector: 'authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {
  @Output()
  authorizationForm: FormGroup;

  constructor(
      private location: Location,
      private userService: UserService
    ) {
      this.authorizationForm = new FormGroup({
        email: new FormControl('', Validators.compose([
                                  Validators.required,
                                  // Validators.minLength(4)
                                ])),
        password: new FormControl('', Validators.compose([
                                      Validators.required,
                                      Validators.minLength(4)
                                    ]))
        });
    }

  goBack() {
    this.location.back();
  }

  logout() {
    this.userService.logout();
  }

  submitForm() {
    this.userService.login(this.authorizationForm.value);
  }

}
