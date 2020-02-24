export default {
  fetchForecasts() {
    return new Promise((resolve, reject) =>
      fetch("api/SampleData/WeatherForecasts")
        .then(response => response.json())
        .then(resolve)
        .catch(reject)
    );
  }
};
