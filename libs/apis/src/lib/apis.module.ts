import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromArtists from './+state/artists.reducer';
import { ArtistsEffects } from './+state/artists.effects';
import * as fromTracks from './+state/tracks.reducer';
import { TracksEffects } from './+state/tracks.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromArtists.ARTISTS_FEATURE_KEY,
      fromArtists.reducer
    ),
    EffectsModule.forFeature([ArtistsEffects]),
    StoreModule.forFeature(fromTracks.TRACKS_FEATURE_KEY, fromTracks.reducer),
    EffectsModule.forFeature([TracksEffects]),
  ],
})
export class ApisModule {}
