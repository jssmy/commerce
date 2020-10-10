import { GrantType } from '../../constants/grant-type';
import { SocialProvider } from '../../constants/social-provider';
import { IAuthUser } from './iauth-user';

export interface ILoginResponse {
  message: string;
  status: string;
  autorization: string;
}

export interface ILogoutResponse {
  success_logout: string;
  message_description: string;
}

export interface IAuthRequest {
  grantType: GrantType;
  email?: string;
  password?: string;
  accessToken?: string;
  idToken?: string;
  provider?: string;
  user?: IAuthUser;
}
