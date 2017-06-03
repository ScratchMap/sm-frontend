import { Component }                from '@angular/core';
import { ActivatedRoute }           from '@angular/router';
import { CommonModule }             from '@angular/common';
import { Location }                 from '@angular/common';
import { FormGroup,
         FormControl,
         Validators }                from '@angular/forms';

import { SendDataService }           from '../../services/sendData.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  title1 = 'its must be the registration form';
  registrationForm: FormGroup;

  constructor(
      private location: Location,
      private sendDataService: SendDataService
    ) {
      this.registrationForm = new FormGroup({
        name: new FormControl('', Validators.compose([
                                  Validators.required,
                                  Validators.minLength(4)
                                ])),
        email: new FormControl('', Validators.compose([
                                   Validators.required,
                                   Validators.minLength(4)
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
  submitForm() {
    console.log(this.registrationForm);
    this.sendDataService.sendData(this.registrationForm.value)
      .subscribe(
        (response) => console.log(response),
        (err) => console.error(err),
        () => console.log('done')
      );
  }
}
