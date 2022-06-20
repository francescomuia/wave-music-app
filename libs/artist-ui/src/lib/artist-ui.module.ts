import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowArtistsBoxComponent } from './follow-artists-box/follow-artists-box.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ApisModule } from '@avr/apis';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ArtistComponent } from './artist/artist.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ApisModule
  ],
  declarations: [FollowArtistsBoxComponent, ArtistComponent],
  exports: [FollowArtistsBoxComponent],
})
export class ArtistUiModule {}
