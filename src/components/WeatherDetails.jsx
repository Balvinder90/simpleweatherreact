function WeatherDetails({ cityDetails }) {
  return (
    <div className="text-muted text-uppercase text-center details">
      <h5 className="my-3">{cityDetails.cityDets.EnglishName}</h5>
      <div className="my-3">{cityDetails.weather.WeatherText}</div>
      <div className="display-4 my-4">
        <span>{cityDetails.weather.Temperature.Metric.Value}</span>
        <span>°C</span>
      </div>
    </div>
  );
}

export default WeatherDetails;
