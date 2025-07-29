import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    const browserLang = localStorage.getItem('lang');
    const lang = browserLang?.match(/en|fa/) ? browserLang : 'en';
    // document.body.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl');
    document.body.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('dir', 'rtl');
  }
}
