import { Component, Input, OnInit } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';
import {
  faPlayCircle,
  faPauseCircle,
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'avr-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input() track?: string;
  api?: VgApiService;
  buttonIcon = faPlayCircle;
  playing: boolean = false;
  playerReady: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onPlayerReady(api: VgApiService) {
    this.api = api;
    this.playerReady = true;
  }

  playPause() {
    if (this.playing) {
      this.api?.pause();
      this.buttonIcon = faPlayCircle;
    } else {
      this.api?.play();
      this.buttonIcon = faPauseCircle;
    }
    this.playing = !this.playing;
  }
}
