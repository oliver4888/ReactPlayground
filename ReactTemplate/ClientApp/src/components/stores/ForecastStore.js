import { decorate, observable, action } from "mobx";

import ForecastsApi from "../datasources/ForecastsApi";

class forecastStore {
  constructor() {
    this.fetchForecasts = this.fetchForecasts.bind(this);
    this.fetchForecasts();
  }

  loading = true;
  forecasts = [];

  fetchForecasts() {
    ForecastsApi.fetchForecasts()
      .then(data => {
        this.loading = false;
        this.forecasts = data;
      })
      .catch(console.log);
  }
}

decorate(forecastStore, {
    loading: observable,
  forecasts: observable,
  fetchForecasts: action
});

const ForecastStore = new forecastStore();
export default ForecastStore;
