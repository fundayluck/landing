import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css',
})
export class ForecastComponent implements OnInit {
  foreCast$: Observable<{ dateString: string; temp: number }[]>;

  constructor(private forecastService: ForecastService) {
    this.foreCast$ = forecastService.getForcast();
  }

  ngOnInit(): void {}

  getDayAndTemp(arg0: any, arg1: any) {
    throw new Error('Method not implemented.');
  }
}
