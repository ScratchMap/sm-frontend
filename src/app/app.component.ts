import { Component }                      from '@angular/core';
import { StateService }                   from './services/state.service';
import { UserService }                    from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
          constructor(
              private stateService: StateService,
              private userService: UserService
            ) {
            if (userService.token) {
              this.stateService.sendMessage(true);
            }
          }


}
