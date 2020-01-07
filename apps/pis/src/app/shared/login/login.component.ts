import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../auth/login.service';
import { SessionQuery } from '../auth/login.query';


@Component({
  selector: 'pis-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private sessionService: SessionService,
        private sessionQuery: SessionQuery
    ) {
        // redirect to home if already logged in
        if (this.sessionQuery.isLoggedIn()) { 
            console.log("has logged in. to / ");
            this.router.navigate(['/']);
        }
        console.log(" didnot logg in");
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.sessionService.login(this.f.username.value, this.f.password.value)
            .subscribe(
                () => {
                    console.log("in loginComponent 001 success  " + this.returnUrl );
                    this.router.navigateByUrl(this.returnUrl);
                });
    }
}
