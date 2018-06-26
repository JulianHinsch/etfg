import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from './auth0-variables';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import Auth0Lock from 'auth0-lock';

@Injectable()
export class AuthService {

    options = {
        oidcConformant: true,
        autoclose: true,
        auth: {
            redirectUrl: AUTH_CONFIG.callbackURL,
            responseType: 'token id_token',
            audience: `https://${AUTH_CONFIG.domain}/userinfo`,
            params: {
                scope: 'openid profile app_metadata'
            }
        },
        languageDictionary: {
            title: 'Authenticate'
        },
        theme: {
            primaryColor: '#EF6430',
        },
        allowShowPassword: true,
        allowForgotPassword: true,
        allowedConnections: ['Username-Password-Authentication']
    }

    lock = new Auth0Lock(AUTH_CONFIG.clientID, AUTH_CONFIG.domain, this.options);

    constructor(public router: Router) {}

    public login(): void {
        this.lock.show({
            initialScreen: 'login'
        });
    }

    public signup(): void {
        this.lock.show({
            initialScreen: 'signUp'
        });
    }

    public handleAuthentication(): void {
        this.lock.on('authenticated', (authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                console.log(authResult);
                //get the role and assign permissions
                /*
                try {
                    let role = authResult.idTokenPayload[`https://${AUTH_CONFIG.domain}/app_metadata`].role;
                    if (role === 'superuser') {
                        this.enableSuperUser();
                        this.setDataFilter('professional');
                        this.setSession(authResult);
                        this.router.navigate(['/dashboard']);
                    } else if (role === 'professional') {
                        this.setDataFilter('professional');
                        this.setSession(authResult);
                        this.router.navigate(['/dashboard']);
                    } else if (role === 'student') {
                        this.setDataFilter('student');
                        this.setSession(authResult);
                        this.router.navigate(['/dashboard']);
                    } else {
                        this.enableSuperUser();
                        this.setDataFilter('professional');
                        this.setSession(authResult);
                        //navigate to dash
                        this.router.navigate(['/dashboard']);                        
                        // if no role is found, do not proceed with authentication
                        this.router.navigate(['/']);
                    }
                } catch (err) {
                    console.log(err);
                    this.router.navigate(['/']);
                }*/

                //for demo (no roles)
                this.enableSuperUser();
                this.setDataFilter('professional');
                this.setSession(authResult);
                //navigate to dash
                this.router.navigate(['/dashboard']);
            }
        });
        this.lock.on('authorization_error', (err) => {
            alert(`Error: ${err.error}. Check the console for further details.`);
        });
    }

    private setSession(authResult): void {
        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 2000) + new Date().getTime());
        //const expiresAt = JSON.stringify(10) + new Date().getTime();
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    public logout(): void {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Remove permissions and data filter
        localStorage.removeItem('data_filter');
        localStorage.removeItem('is_super_user');
        // Go back to the home route
        this.router.navigate(['/']);
    }

    public isAuthenticated(): boolean {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    private clearRedirect() {
        // Remove redirect from localStorage
        localStorage.removeItem('authRedirect');
    }

    //getters & setters

    public getDataFilter(): string {
        return localStorage.getItem('data_filter');
    }

    public setDataFilter(dataFilter: string) {
        localStorage.setItem('data_filter',dataFilter);
    }

    public enableSuperUser() {
        localStorage.setItem('is_super_user','true');
    }

    public getIsSuperUser() {
        return localStorage.getItem('is_super_user');
    }
}