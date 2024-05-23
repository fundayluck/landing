import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css',
})
export class ForecastComponent implements OnInit {
  foreCastData: any[] = [];

  constructor(private forecastService: ForecastService) {
    forecastService.getForcast().subscribe((foreCastData) => {
      this.foreCastData = foreCastData;
    });
  }

  ngOnInit(): void {}

  getDayAndTemp(arg0: any, arg1: any) {
    throw new Error('Method not implemented.');
  }
}
