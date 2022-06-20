import { Component, Input, OnInit } from '@angular/core';
import { TracksEntity } from '@avr/apis';

@Component({
  selector: 'avr-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {
  @Input() track?: TracksEntity;
  constructor() {}

  ngOnInit(): void {}
}
