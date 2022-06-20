import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as TracksActions from './tracks.actions';
import { TracksEntity } from './tracks.models';

export const TRACKS_FEATURE_KEY = 'tracks';

export interface State extends EntityState<TracksEntity> {
  selectedId?: string | number; // which Tracks record has been selected
  playing?: TracksEntity,
  loaded: boolean; // has the Tracks list been loaded
  error?: string | null; // last known error (if any)
}

export interface TracksPartialState {
  readonly [TRACKS_FEATURE_KEY]: State;
}

export const tracksAdapter: EntityAdapter<TracksEntity> =
  createEntityAdapter<TracksEntity>();

export const initialState: State = tracksAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const tracksReducer = createReducer(
  initialState,
  on(TracksActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(TracksActions.loadTracksSuccess, (state, { tracks }) => {
    let newTracks: TracksEntity[] = [];
    for (let key in state.entities) {
      newTracks.push(<TracksEntity>state.entities[key]);
    }
    newTracks = newTracks.concat(tracks);
    return tracksAdapter.setAll(newTracks, { ...state, loaded: true });
  }),
  on(TracksActions.loadTrackSuccess,(state, {track})=> {
    return tracksAdapter.setOne(track,{...state,loaded: true,playing: track});
  }),
  on(TracksActions.loadTracksFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return tracksReducer(state, action);
}
