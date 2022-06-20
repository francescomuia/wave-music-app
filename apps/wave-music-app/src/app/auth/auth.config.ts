import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://fmuia.eu.auth0.com/',
  clientId: 'lHzLqewM98YuqcGxiLgd6tSrthwokSxb',
  redirectUri: window.location.origin + '/index.html',
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  scope: 'openid profile email',
};
