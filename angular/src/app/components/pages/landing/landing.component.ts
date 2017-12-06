import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
    selector: 'landing',
    template:`
        <div *ngIf="!auth.isAuthenticated()" class="text-center">
            <div class="jumbotron-container">
                <div class="jumbotron">
                    <h1 class="display-3">Welcome</h1>
                    <p class="lead">Please log in or register to continue to the dashboard.</p>
                    <hr class="my-4">
                    <button mat-raised-button (click)="auth.login()" class="auth-button">Log In</button>
                    <button mat-raised-button (click)="auth.signup()" class="auth-button">Sign Up</button>
                </div>
            </div>
        </div>`,
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    constructor( public auth: AuthService, public router: Router) {}

    ngOnInit() {
        if (this.auth.isAuthenticated()) {
            this.router.navigate(['/dashboard']);
        }
    }
}
