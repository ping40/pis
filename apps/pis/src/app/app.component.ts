import { Component } from '@angular/core';
import { UserData } from '@pis/api-interfaces';
import { Router } from '@angular/router';
import { AuthenticationService } from './shared/auth/authentication.service';

@Component({
  selector: 'pis-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: UserData;
  
  constructor(private router: Router,
    private authenticationService: AuthenticationService) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
      this.currentUser = null;
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
}
