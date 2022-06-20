import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApisModule } from '@avr/apis';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DiscoveryBoxComponent } from './discovery-box/discovery-box.component';
import { AlbumComponent } from './album/album.component';
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
    ApisModule,
  ],
  declarations: [
    DiscoveryBoxComponent,
    AlbumComponent
  ],
  exports: [
    DiscoveryBoxComponent
  ],
})
export class DiscoveryUiModule {}
