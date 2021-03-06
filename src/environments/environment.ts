// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.

import { IEnvironment } from "./model/environment-model";

// The list of file replacements can be found in `angular.json`.
export const environment: IEnvironment = {
  production: false,
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


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
