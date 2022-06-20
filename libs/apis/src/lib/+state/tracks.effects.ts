import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { JamendoService } from './../services/jamendo.service';
import * as TracksActions from './tracks.actions';

@Injectable()
export class TracksEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TracksActions.init),
      switchMap((action) => {
        return this.api
          .getTracks(
            action.id,
            action.offset,
            action.limit,
            action.withImage,
            action.order
          )
          .pipe(
            map((data) => {
              if (action.id) {
                return TracksActions.loadTrackSuccess({ track: data[0] });
              } else {
                return TracksActions.loadTracksSuccess({ tracks: data });
              }
            })
          );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private api: JamendoService
  ) {}
}
