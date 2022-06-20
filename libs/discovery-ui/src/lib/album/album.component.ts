import { Component, Input, OnInit } from '@angular/core';
import { ArtistsEntity } from '@avr/apis';

@Component({
  selector: 'avr-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  @Input() artist?: ArtistsEntity;
  constructor() { }

  ngOnInit(): void {
  }

}
