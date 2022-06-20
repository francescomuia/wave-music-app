import { createAction, props } from '@ngrx/store';
import { TracksEntity } from './tracks.models';

export const init = createAction(
  '[Tracks Page] Init',
  props<{
    id?: number;
    offset?: number;
    limit?: number;
    withImage?: boolean;
    order?:
      | 'id'
      | 'joindate'
      | 'popularity_total'
      | 'popularity_month'
      | 'popularity_week';
  }>()
);

export const loadTracksSuccess = createAction(
  '[Tracks/API] Load Tracks Success',
  props<{ tracks: TracksEntity[] }>()
);

export const loadTrackSuccess = createAction(
  '[Tracks/API] Load Track Success',
  props<{ track: TracksEntity }>()
);

export const loadTracksFailure = createAction(
  '[Tracks/API] Load Tracks Failure',
  props<{ error: any }>()
);
