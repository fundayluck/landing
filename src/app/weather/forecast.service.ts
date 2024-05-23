import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  constructor() {}

  getForcast() {
    this.getCurrentLocation().pipe(
      map((coords) => {
        return new HttpParams()
          .set('lat', String(coords.latitude))
          .set('lon', String(coords.longitude))
          .set('units', 'metric')
          .set('appid', '7f1160f2208fbd69d1604edf7339633b');
      })
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
