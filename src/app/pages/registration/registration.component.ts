import { Component, Output }        from '@angular/core';
import { ActivatedRoute }           from '@angular/router';
import { CommonModule }             from '@angular/common';
import { Location }                 from '@angular/common';
import { FormGroup,
         FormControl,
         Validators }                from '@angular/forms';

import { UserService }           from '../../services/user.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  @Output()
  registrationForm: FormGroup;
  success: boolean;
  public token: string;

  constructor(
      private location: Location,
      private userService: UserService
    ) {
      this.registrationForm = new FormGroup({
        name: new FormControl('', Validators.compose([
                                  Validators.required,
                                  Validators.minLength(4)
                                ])),
        email: new FormControl('',  this.validateEmail ),
        password: new FormControl('', Validators.compose([
                                   Validators.required,
                                   Validators.minLength(4)
                                ]))
        });
    }

  goBack() {
    this.location.back();
  }

  submitForm() {
    console.log(this.registrationForm.value);
    this.userService.sendRegistrationData(this.registrationForm.value)
      .subscribe(
        (response) => {
           console.log(response);
           this.token = response.auth_token;
           console.log(this.token);
          localStorage.setItem('currentUser', JSON.stringify({ username: this.registrationForm.value.name, token: this.token }));
         },
        (err) => {
          console.error(err);
          this.success = false;
        },
        () => this.success = true

      );
  }

  validateEmail(email: FormControl) {
    const CHECK = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    return CHECK.test(email.value) ? null : {
    validateEmail: {
      valid: false
      }
    };
  }

}
