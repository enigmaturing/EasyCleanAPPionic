import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByName('white');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.platform.ready().then(() => {
        this.platform.backButton.subscribeWithPriority(9999, () => {
          // tslint:disable-next-line: only-arrow-functions
          document.addEventListener('backbutton', function(event) {
            event.preventDefault();
            event.stopPropagation();
          }, false);
        });
      })
    });
  }
}
