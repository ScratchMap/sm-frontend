import { Injectable }             from '@angular/core';
import { Http,
         Response,
         Headers,
         URLSearchParams,
         RequestOptions
    }                             from '@angular/http';
import { Observable }             from 'rxjs';
import { environment }            from './../../environments/environment'
import { StateService }            from '../services/state.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()

export class UserService {
  public token: string;
  constructor ( private http: Http, private stateService: StateService ) {
    this.token = localStorage.getItem('currentUser');
    if (this.token) {
      this.stateService.sendMessage(true);
    } else {
      this.stateService.sendMessage(false);
    }
  }

sendRegistrationData(data: any) {
  return this.http.post(environment.BASE_URL + ' auth/register', data)
    .map((res: Response) => res.json());
  }

sendAuthorizationData(data: any) {
  return this.http.post(environment.BASE_URL + 'auth/login', data)
    .map((res: Response) => res.json());
  }

getUser() {
  let headers = new Headers({
    'Authorization': this.token,
    'Content-type': 'application/json'
   });
  let options = new RequestOptions({ headers: headers });
  return this.http.get( environment.BASE_URL + 'auth/profile', options)
                  .map(res =>  res.json().data)
  }

register( data: any ) {
  this.sendRegistrationData(data)
    .subscribe(
      (response) => {
         this.token = response.auth_token;
        localStorage.setItem('currentUser', this.token );
       },
      (err) => {
      },
      () => console.error('good!')
    );
}

login( data: any ) {
  this.sendAuthorizationData(data)
    .subscribe(
      (response) => {
        this.token = response.auth_token;
        localStorage.setItem('currentUser', this.token);
        },
        (err) => {
         console.error(err);
        },
        () => {
         this.stateService.sendMessage(true);
        }
    );
}

logout(): void {
    localStorage.removeItem('currentUser');
    this.token = undefined;
    this.stateService.sendMessage(false);
    }
}
