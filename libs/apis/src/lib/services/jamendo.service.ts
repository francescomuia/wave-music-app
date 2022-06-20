import { JamendoCollectionResponse } from './../responses/jamendo-collection-response';
import { ArtistsEntity } from './../+state/artists.models';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Environment, ENVIRONMENT } from '@avr/environment';
import { map, catchError, of, Observable } from 'rxjs';
import { NumberSymbol } from '@angular/common';
import { TracksEntity } from '../+state/tracks.models';

@Injectable({
  providedIn: 'root',
})
export class JamendoService {
  private readonly ARTISTS_API: string = '/artists';
  private readonly TRACKS_API: string = '/tracks';
  private readonly CLIENT_ID_PARAM: string = 'client_id';
  private readonly OFFSET_PARAM: string = 'offset';
  private readonly LIMIT_PARAM: string = 'limit';
  private readonly WITH_IMAGE_PARAM: string = 'hasimage';
  private readonly ORDER_PARAM: string = 'order';
  private TRACK_ID_PARAM: string = 'id';

  constructor(
    @Inject(ENVIRONMENT) private env: Environment,
    private http: HttpClient
  ) {}

  getArtists(
    offset: number,
    limit: number,
    withImage: boolean,
    order?:
      | 'id'
      | 'joindate'
      | 'popularity_total'
      | 'popularity_month'
      | 'popularity_week'
  ) {
    let params = new HttpParams()
      .set(this.CLIENT_ID_PARAM, this.env.client_id)
      .set(this.OFFSET_PARAM, offset)
      .set(this.LIMIT_PARAM, limit);
    if (withImage) {
      params = params.set(this.WITH_IMAGE_PARAM, true);
    }
    if (order) {
      params = params.set(this.ORDER_PARAM, order);
    }
    return this.http
      .get<{ jamendoResponse: JamendoCollectionResponse<ArtistsEntity> }>(
        this.env.api_url + this.ARTISTS_API,
        {
          params,
        }
      )
      .pipe(
        catchError((error) => of(error)),
        map((response) => {
          return response.results.map((artist: any, index: any) => {
            return {
              id: index,
              ...artist,
            };
          });
        })
      );
  }

  getTracks(
    id?: number,
    offset?: number,
    limit?: number,
    withImage?: boolean,
    order?:
      | 'id'
      | 'joindate'
      | 'popularity_total'
      | 'popularity_month'
      | 'popularity_week'
  ): Observable<TracksEntity[]> {
    let params = null;
    if (id) {
      params = new HttpParams()
        .set(this.CLIENT_ID_PARAM, this.env.client_id)
        .set(this.TRACK_ID_PARAM, id);
    } else {
      params = new HttpParams()
        .set(this.CLIENT_ID_PARAM, this.env.client_id)
        .set(this.OFFSET_PARAM, <number>offset)
        .set(this.LIMIT_PARAM, <number>limit);
    }
    if (withImage) {
      params = params.set(this.WITH_IMAGE_PARAM, true);
    }
    if (order) {
      params = params.set(this.ORDER_PARAM, order);
    }
    return this.http
      .get<{ jamendoResponse: JamendoCollectionResponse<TracksEntity> }>(
        this.env.api_url + this.TRACKS_API,
        {
          params,
        }
      )
      .pipe(
        catchError((error) => of(error)),
        map((response) => {
          return response.results.map((track: TracksEntity, index: any) => {
            return {
              ...track,
            };
          });
        })
      );
  }
}
