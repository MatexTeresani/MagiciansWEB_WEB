import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { HomeComponent } from './pages/home/home.component';

const serverConfig: ApplicationConfig = {
  providers: [
    HomeComponent,
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
