import { Injectable }                                          from '@angular/core';
import { Http,Response, Headers, URLSearchParams }             from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()

export class SendDataService {

  constructor ( private http: Http ) {}

sendData(data: any) {
  return this.http.post( 'https://link', data)
    .map((res: Response) => res .json());
  }
}
