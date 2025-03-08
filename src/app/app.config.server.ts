import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app.config';

export const appConfigServer: ApplicationConfig = {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideHttpClient(), // ✅ Ensure this is added
  ],
};
