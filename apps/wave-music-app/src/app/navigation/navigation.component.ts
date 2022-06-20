import { faGear, faHouse } from '@fortawesome/free-solid-svg-icons';

import { Component, OnInit } from '@angular/core';
import { faCompass, faHeart, faSun } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'avr-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  homeIcon = faHouse;
  exploreIcon= faCompass;
  preferedIcon = faHeart;
  settingIcon = faSun;

  constructor() {}

  ngOnInit(): void {}
}
