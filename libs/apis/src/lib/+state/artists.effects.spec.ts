import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ArtistsActions from './artists.actions';
import { ArtistsEffects } from './artists.effects';

describe('ArtistsEffects', () => {
  let actions: Observable<Action>;
  let effects: ArtistsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ArtistsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ArtistsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ArtistsActions.init() });

      const expected = hot('-a-|', {
        a: ArtistsActions.loadArtistsSuccess({ artists: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
