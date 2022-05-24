import { Environment } from 'src/app/core/models/enum/environment.enum';

// Servidor de debug local (apiUrl deve ser o IP local do seu computador)
export const environment = {
  production: false,
  name: Environment.dev,
  apiBaseUrl: 'http://10.20.9.183:44363/v1/',
  apiUrl: 'http://10.20.9.183:44363/v1/Intra/'
};
