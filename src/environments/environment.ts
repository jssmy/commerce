// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,
  URL_PRODUCT_SERVICE_RECOMMED: 'https://env-dev-product-service.herokuapp.com/api/product/recommended',
  URL_PRODUCT_SERVICE_FIND: 'https://env-dev-product-service.herokuapp.com/api/product/find',
  URL_AUTH_LOGIN: 'https://server-user-management.herokuapp.com/api/auth/user',
  URL_AUTH_LOGOUT: 'https://server-user-management.herokuapp.com/api/logout/user'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
