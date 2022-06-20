import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TracksEntity } from './tracks.models';
import { TRACKS_FEATURE_KEY, State, tracksAdapter } from './tracks.reducer';

// Lookup the 'Tracks' feature state managed by NgRx
export const getTracksState = createFeatureSelector<State>(TRACKS_FEATURE_KEY);

const { selectAll, selectEntities } = tracksAdapter.getSelectors();

export const getTracksLoaded = createSelector(
  getTracksState,
  (state: State) => state.loaded
);

export const getTracksError = createSelector(
  getTracksState,
  (state: State) => state.error
);

export const getAllTracks = createSelector(getTracksState, (state: State) =>
  selectAll(state)
);
export const getAllTracksWithImage = createSelector(getAllTracks, (tracks) => {
  return tracks.filter((track: TracksEntity) => track.album_image != '');
});

export const getTracksEntities = createSelector(
  getTracksState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getTracksState,
  (state: State) => state.selectedId
);

export const getPlaying = createSelector(
  getTracksState,
  (state: State) => state.playing
);

export const getSelected = createSelector(
  getTracksEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
