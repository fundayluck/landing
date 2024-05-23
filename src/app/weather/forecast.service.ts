import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  url = 'https://api.openweathermap.org/data/2.5/forecast';
  constructor(private http: HttpClient) {}

  getForcast() {
    return this.getCurrentLocation().pipe(
      map((coords) => {
        return new HttpParams()
          .set('lat', String(coords.latitude))
          .set('lon', String(coords.longitude))
          .set('units', 'metric')
          .set('appid', '7f1160f2208fbd69d1604edf7339633b');
      }),
      switchMap((params) => this.http.get(this.url, { params }))
    );
  }

  getCurrentLocation() {
    //   window.navigator.geolocation.getCurrentPosition((position) => {
    //     this.position = position;
    //     getForecastData();
    //   });

    return new Observable<GeolocationCoordinates>((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (err) => {
          observer.error(err);
        }
      );
    });
  }
}
