export class Login {
  username: string;
  password: string;
}

export class AccessToken {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: Array<string>;
  organization: string;
  jti: string;
}
