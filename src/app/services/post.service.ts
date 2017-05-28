import { Injectable }                       from '@angular/core';

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
  }

  getPost() {
      return this.post;
  }
}
