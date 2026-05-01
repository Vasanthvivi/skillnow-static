import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, RouteReuseStrategy, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { HomeRouteReuseStrategy } from './home-route-reuse.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    { provide: RouteReuseStrategy, useClass: HomeRouteReuseStrategy },
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        /** Custom section scroll in Home; "enabled" resets viewport and overrides scrollIntoView */
        scrollPositionRestoration: 'disabled',
      })
    )
  ]
};
