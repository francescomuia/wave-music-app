import { Action } from '@ngrx/store';

import * as ArtistsActions from './artists.actions';
import { ArtistsEntity } from './artists.models';
import { State, initialState, reducer } from './artists.reducer';

describe('Artists Reducer', () => {
  const createArtistsEntity = (id: string, name = ''): ArtistsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Artists actions', () => {
    it('loadArtistsSuccess should return the list of known Artists', () => {
      const artists = [
        createArtistsEntity('PRODUCT-AAA'),
        createArtistsEntity('PRODUCT-zzz'),
      ];
      const action = ArtistsActions.loadArtistsSuccess({ artists });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
