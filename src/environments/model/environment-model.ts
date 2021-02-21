export interface IEnvironment {
  production: boolean;
  environmentProducts: IEnvProduct;
  environmentAuth: IEnvAuthManagment;
}

interface IEnvProduct {
  baseUrl: string;
  serviceRecommended: string;
  serviceFindProduct: string;
}


interface IEnvAuthManagment {
  baseUrl: string;
  serviceLogin: string;
  serviceLogout: string;
  serviceRegister: string;
}

