import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { httpInterceptorProviders } from './core/Interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(), // Fournit HttpClient pour l'application
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(),
  ]
};