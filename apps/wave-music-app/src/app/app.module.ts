import { PlayerUiModule } from './../../../../libs/player-ui/src/lib/player-ui.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArtistUiModule } from '@avr/artist-ui';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ENVIRONMENT } from '@avr/environment';
import { RecentPlayedUiModule } from 'libs/recent-played-ui/src';
import { SearchUiModule } from 'libs/search-ui/src';
import { UserUiModule } from 'libs/user-ui/src';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DiscoveryUiModule } from 'libs/discovery-ui/src';
import { AppRoutingModule } from './app-routing.module';
import { MusicPlayerComponent } from './music-player/music-player.component';

export * from 'libs/user-ui/src';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [AppComponent, NavigationComponent,HomeComponent, MusicPlayerComponent],
  imports: [
    AppRoutingModule, 
    RouterModule,
    BrowserModule,
    FontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),

    UserUiModule,
    SearchUiModule,
    ArtistUiModule,
    RecentPlayedUiModule,
    DiscoveryUiModule,
    PlayerUiModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],

  ],
  providers: [{ provide: ENVIRONMENT, useValue: environment }],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule {}
