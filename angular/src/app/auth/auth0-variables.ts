import { environment } from '../../environments/environment';

interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'bDXcVu8YVfQtC3YvmskMLhKOwmTe8b5K',
  domain: 'etfg.auth0.com',
  //callbackURL: 'http://localhost:4200/callback'
  callbackURL: `${environment.baseUrl}/callback`
};
