import { Action } from '@ngrx/store';

import * as TracksActions from './tracks.actions';
import { TracksEntity } from './tracks.models';
import { State, initialState, reducer } from './tracks.reducer';

describe('Tracks Reducer', () => {
  const createTracksEntity = (id: string, name = ''): TracksEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Tracks actions', () => {
    it('loadTracksSuccess should return the list of known Tracks', () => {
      const tracks = [
        createTracksEntity('PRODUCT-AAA'),
        createTracksEntity('PRODUCT-zzz'),
      ];
      const action = TracksActions.loadTracksSuccess({ tracks });

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
