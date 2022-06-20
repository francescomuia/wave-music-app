import { Component, OnInit } from '@angular/core';
import { TracksActions, TracksSelectors } from '@avr/apis';
import { Store } from '@ngrx/store';

@Component({
  selector: 'avr-recent-played-box',
  templateUrl: './recent-played-box.component.html',
  styleUrls: ['./recent-played-box.component.scss'],
})
export class RecentPlayedBoxComponent implements OnInit {

  tracks$ = this.store.select(TracksSelectors.getAllTracksWithImage)
  throttle = 300;
  scrollDistance = 0.2;
  limit = 50;
  offset = 0;
  
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.dispatchLoadAction(this.offset,this.limit);
  }

  private dispatchLoadAction(offset: number, limit: number) {
    this.store.dispatch(
      TracksActions.init({
        offset: offset,
        limit: limit,
        withImage: true,
        order: 'popularity_week'
      })
    );
  }

  onScrollEnd() {
    this.offset += this.limit;
    this.dispatchLoadAction(this.offset,this.limit);
  }
}
