import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ForecastComponent } from './weather/forecast/forecast.component';
import { WeatherModule } from './weather/weather.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WeatherModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
