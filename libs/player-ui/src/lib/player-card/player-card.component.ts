import { Observable } from 'rxjs';
import { TracksEntity, TracksSelectors, TracksActions } from '@avr/apis';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'avr-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
})
export class PlayerCardComponent implements OnInit {
  @Input() trackId?: number;
  track$ = this.store.select(TracksSelectors.getPlaying);
  constructor(private store: Store) {}

  ngOnInit(): void {
    if (this.trackId) {
      this.dispatchLoadAction(this.trackId);
    }
  }
  private dispatchLoadAction(id: number) {
    this.store.dispatch(
      TracksActions.init({
        id: id,
      })
    );
  }
}
