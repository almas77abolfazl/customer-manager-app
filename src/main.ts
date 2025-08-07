import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, RouteReuseStrategy, provideRouter, withPreloading } from '@angular/router';

import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  addOutline,
  barChartOutline,
  callOutline,
  downloadOutline,
  eyeOutline,
  peopleOutline,
  personAddOutline,
  settingsOutline,
  trashOutline,
} from 'ionicons/icons';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideCharts(withDefaultRegisterables()),
  ],
});

addIcons({
  'people-outline': peopleOutline,
  'bar-chart-outline': barChartOutline,
  'settings-outline': settingsOutline,
  'add-outline': addOutline,
  'call-outline': callOutline,
  'person-add-outline': personAddOutline,
  'eye-outline': eyeOutline,
  'trash-outline': trashOutline,
  'download-outline': downloadOutline,
});
