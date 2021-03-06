import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'avr-logged-user',
  templateUrl: './logged-user.component.html',
  styleUrls: ['./logged-user.component.scss'],
})
export class LoggedUserComponent implements OnInit {
  name?: string;
  picture?: string = '/assets/user.png';

  constructor() {}

  ngOnInit(): void {}
} 
