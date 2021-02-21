import { environment } from 'src/environments/environment';

export const ENABLE_LOADER: string[] = [
  environment.environmentAuth.baseUrl+'/'+environment.environmentAuth.serviceLogin,
  environment.environmentAuth.baseUrl+'/'+ environment.environmentAuth.serviceRegister,
  environment.environmentAuth.baseUrl+'/'+ environment.environmentAuth.serviceLogout
];

