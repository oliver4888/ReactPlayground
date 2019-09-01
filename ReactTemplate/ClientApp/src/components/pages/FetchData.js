import React from "react";
import { Table, Button } from "react-bootstrap";
import { observer } from "mobx-react";

import ForecastsStore from "../stores/ForecastStore";

const FetchData = observer(function FetchData() {
  let contents = ForecastsStore.loading ? (
    <p>
      <em>Loading...</em>
    </p>
  ) : (
    <Table striped>
      <thead>
        <tr>
          <th>Date</th>
          <th>Temp. (C)</th>
          <th>Temp. (F)</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        {ForecastsStore.forecasts.map(forecast => (
          <tr key={forecast.dateFormatted}>
            <td>{forecast.dateFormatted}</td>
            <td>{forecast.temperatureC}</td>
            <td>{forecast.temperatureF}</td>
            <td>{forecast.summary}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <div>
      <h1>Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
      <Button variant="secondary" onClick={ForecastsStore.fetchForecasts}>
        Refresh
      </Button>
      {contents}
    </div>
  );
});

export default FetchData;
