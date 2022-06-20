import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as TracksActions from './tracks.actions';
import { TracksEffects } from './tracks.effects';

describe('TracksEffects', () => {
  let actions: Observable<Action>;
  let effects: TracksEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        TracksEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(TracksEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: TracksActions.init() });

      const expected = hot('-a-|', {
        a: TracksActions.loadTracksSuccess({ tracks: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
