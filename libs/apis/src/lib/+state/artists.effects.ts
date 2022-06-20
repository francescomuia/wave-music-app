import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { catchError, exhaustMap, map, of, Observable, switchMap } from 'rxjs';
import { JamendoService } from '../services/jamendo.service';
import * as ArtistsActions from './artists.actions';

@Injectable()
export class ArtistsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArtistsActions.init),
      switchMap((action) =>
        this.api
          .getArtists(action.offset, action.limit, action.withImage, action.order)
          .pipe(
            map((data) => ArtistsActions.loadArtistsSuccess({ artists: data }))
          )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private api: JamendoService
  ) {}
}
