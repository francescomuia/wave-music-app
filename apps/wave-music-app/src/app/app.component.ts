import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'avr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'wave-music-app';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    console.log("BROWSER LANg "+browserLang);
    let lang: string = browserLang?.match(/en|it/) ? browserLang : 'en'; 
    translate.use(lang);
  }

  
}
