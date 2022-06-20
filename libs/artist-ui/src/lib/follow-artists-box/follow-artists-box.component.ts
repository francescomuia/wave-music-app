import { Component, OnInit } from '@angular/core';
import { ArtistsActions, ArtistsSelectors } from '@avr/apis';
import { Store } from '@ngrx/store';

@Component({
  selector: 'avr-follow-artists-box',
  templateUrl: './follow-artists-box.component.html',
  styleUrls: ['./follow-artists-box.component.scss'],
})
export class FollowArtistsBoxComponent implements OnInit {
  artists$ = this.store.select(ArtistsSelectors.getAllArtistsWithImage);
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
      ArtistsActions.init({
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
