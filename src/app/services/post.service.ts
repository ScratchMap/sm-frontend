import { Injectable }                       from '@angular/core';
import { Http }                             from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()

export class PostService {
  post = {
          postid: 'post1',
          imgs: [
            '../../../assets/rotator_imgs/1.jpg',
            '../../../assets/rotator_imgs/2.jpg',
            '../../../assets/rotator_imgs/3.jpg',
            '../../../assets/rotator_imgs/4.jpg'
          ],
          postData: 'TOP FASHION RUNWAY PHOTOGRAPHY BASED IN THE MIDDLE EAST & EUROPE',
          metaData : {
            place: 'paris',
            tags: ['paris', 'france', 'travel'],
            geo : { lat: -25.363, lng: 131.044 },
            data : '21.01.2114'
      }
  };

  constructor ( private http: Http ) {

  }

  getPost() {
    return this.http.get( 'https://stark-reaches-32859.herokuapp.com/hello?name=Miron&surname=Zabolotnev' )
      .toPromise()
      .then(response => response.json())
      .catch(err => console.log(err));
  }

  getPost2() {
    return this.http.get( 'https://stark-reaches-32859.herokuapp.com/hello?name=Miron&surname=Zabolotnev' )
      .map(response => response.json());
  }

  getPost3() {
    return this.post;
  }
}
