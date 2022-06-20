import { ArtistsEntity } from './artists.models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ARTISTS_FEATURE_KEY, State, artistsAdapter } from './artists.reducer';

// Lookup the 'Artists' feature state managed by NgRx
export const getArtistsState =
  createFeatureSelector<State>(ARTISTS_FEATURE_KEY);

const { selectAll, selectEntities } = artistsAdapter.getSelectors();

export const getArtistsLoaded = createSelector(
  getArtistsState,
  (state: State) => state.loaded
);

export const getArtistsError = createSelector(
  getArtistsState,
  (state: State) => state.error
);


export const getAllArtists = createSelector(getArtistsState, (state: State) =>
  selectAll(state)
);

export const getAllArtistsWithImage = createSelector(getAllArtists, (artists) => {
  
  return artists.filter((artist: ArtistsEntity) => artist.image != "")
});


export const getArtistsEntities = createSelector(
  getArtistsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getArtistsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getArtistsEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
