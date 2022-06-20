import { createAction, props } from '@ngrx/store';
import { ArtistsEntity } from './artists.models';

export const init = createAction(
  '[Artists Page] Init',
  props<{
    offset: number;
    limit: number;
    withImage: boolean;
    order?:
      | 'id'
      | 'joindate'
      | 'popularity_total'
      | 'popularity_month'
      | 'popularity_week';
  }>()
);

export const loadArtistsSuccess = createAction(
  '[Artists/API] Load Artists Success',
  props<{ artists: ArtistsEntity[] }>()
);

export const loadArtistsFailure = createAction(
  '[Artists/API] Load Artists Failure',
  props<{ error: any }>()
);
