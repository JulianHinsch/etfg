import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import {Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavBar implements OnInit {
    public searchForm = this.fb.group({
        term: ["", Validators.required]
    });

    constructor(public fb: FormBuilder, public auth: AuthService, public router: Router) { 
        auth.handleAuthentication();
    }

    public handleSearch = (event) => {
        this.router.navigateByUrl(`/search/${this.searchForm.controls.term.value}`);
        this.searchForm.reset();
    }

    isLanding() {
        return this.router.url.includes('home') || this.router.url === '/';
    }

    ngOnInit() {
        if(this.auth.isAuthenticated() && !this.isLanding()) {
            this.auth.login();
        }
    }
}
