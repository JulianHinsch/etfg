import { environment } from '../../environments/environment';

interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'JVWTl27ibH780mxnd7atqxwqO3wQgei5',
  domain: 'etfs.auth0.com',
  callbackURL: `${environment.baseUrl}/callback`
};
