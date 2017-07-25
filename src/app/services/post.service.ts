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
import { UserService }            from '../services/user.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()

export class PostService {
geo: object;


  constructor (
     private http: Http,
     private userService: UserService,

    ) {

  }

  getAllPosts() {
    return this.http.get( environment.BASE_URL + 'posts')
                    .map((res: Response) => res.json());
    }

  getPostById(id) {
    return this.http.get( environment.BASE_URL + 'posts?post_id=' + id)
                      .map((res: Response) => res.json());
    }

  getUserPosts() {
    let headers = new Headers({
      'Authorization': this.userService.token,
      'Content-type': 'application/json'
     });
    let options = new RequestOptions({ headers: headers });
    console.log(options)
    return this.http.get( environment.BASE_URL + 'user/posts', options)
                    .map((res: Response) => res.json());
    }

  sendPostData(data: any) {
    let headers = new Headers({
      'Authorization': this.userService.token,
      'Content-type': 'application/json'
     });
    console.log('headers', headers);
    let options = new RequestOptions({ headers: headers });
    console.log(options);
    return this.http.post(environment.BASE_URL + 'user/posts', data, options)
      .map((res: Response) => res.json());
    }
}
