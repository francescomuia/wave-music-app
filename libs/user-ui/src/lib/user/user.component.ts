import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'avr-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  get isLoggedIn() {
    return true;
  }
}
