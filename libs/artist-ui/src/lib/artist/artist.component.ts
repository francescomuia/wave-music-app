import { ArtistsEntity } from './../../../../apis/src/lib/+state/artists.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'avr-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  @Input() artist?: ArtistsEntity;
  constructor() {}

  ngOnInit(): void {}
}
