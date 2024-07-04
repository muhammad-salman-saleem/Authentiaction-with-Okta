export const oktaConfig = {
	issuer: `https://${process.env.REACT_APP_OKTA_BASE}/oauth2/default`,
	clientId: process.env.REACT_APP_OKTA_CLIENT,
	redirectUri: `http://localhost:3000/login/callback`,
	scopes: ["openid", "profile", "email"],
	pkce: true,
};
