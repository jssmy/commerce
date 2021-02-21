import { IEnvironment } from "./model/environment-model";

export const environment: IEnvironment = {
  production: true,
  environmentProducts: {
    baseUrl: 'https://env-dev-product-service.herokuapp.com',
    serviceFindProduct: 'api/product/find',
    serviceRecommended: 'api/product/recommended'
  },
  environmentAuth:  {
    baseUrl: 'https://server-user-management.herokuapp.com',
    serviceLogin: 'api/auth/user',
    serviceLogout: 'api/logout/user',
    serviceRegister: 'api/create/user'
  }
};
