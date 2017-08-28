import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StateService {
    public message = new Subject();
    // public message2 = new Subject();
    public geoMarker = new Subject();

    public messageEmitted$ = this.message.asObservable();
    public messagegeoMarker$ = this.geoMarker.asObservable();
    public newMarker: any;
    sendMessage(message: boolean) {
        this.message.next( message );
    }

    sendGeo(message: object) {
        this.geoMarker.next( message );
    }
}
