import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css',
})
export class ForecastComponent implements OnInit {
  constructor(private forecastService: ForecastService) {
    forecastService.getForcast().subscribe((weatherResponse) => {
      console.log(weatherResponse);
    });
  }

  ngOnInit(): void {}
}
