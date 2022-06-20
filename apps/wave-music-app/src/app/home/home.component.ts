import { TranslateService } from '@ngx-translate/core';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public translate: TranslateService) {
  }
  get titleMessage() {
    let today = new Date()
    let curHr = today.getHours()
    let message;
    if (curHr < 12) {
      message = this.translate.instant('HOME.TITLE.MORNING');
    } else if (curHr < 18) {
      message = this.translate.instant('HOME.TITLE.AFTERNOON');
    } else {
      message = this.translate.instant('HOME.TITLE.NIGHT');
    }
    return message;
  }
}
