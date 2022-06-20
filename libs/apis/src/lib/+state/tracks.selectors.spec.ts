import { TracksEntity } from './tracks.models';
import {
  tracksAdapter,
  TracksPartialState,
  initialState,
} from './tracks.reducer';
import * as TracksSelectors from './tracks.selectors';

describe('Tracks Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTracksId = (it: TracksEntity) => it.id;
  const createTracksEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as TracksEntity);

  let state: TracksPartialState;

  beforeEach(() => {
    state = {
      tracks: tracksAdapter.setAll(
        [
          createTracksEntity('PRODUCT-AAA'),
          createTracksEntity('PRODUCT-BBB'),
          createTracksEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Tracks Selectors', () => {
    it('getAllTracks() should return the list of Tracks', () => {
      const results = TracksSelectors.getAllTracks(state);
      const selId = getTracksId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = TracksSelectors.getSelected(state) as TracksEntity;
      const selId = getTracksId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getTracksLoaded() should return the current "loaded" status', () => {
      const result = TracksSelectors.getTracksLoaded(state);

      expect(result).toBe(true);
    });

    it('getTracksError() should return the current "error" state', () => {
      const result = TracksSelectors.getTracksError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
