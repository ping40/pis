import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './shared/auth/login.service';
import { SessionQuery } from './shared/auth/login.query';
import { Observable } from 'rxjs';

@Component({
  selector: 'pis-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  name$: Observable<string>;
  
  constructor(private authService: SessionService, 
    private authQuery: SessionQuery,
    private router: Router) {}

    ngOnInit() {
      this.name$ = this.authQuery.name$;
    }

    logout() {
      this.authService.logout();
      this.router.navigateByUrl('/login');
  }
}
