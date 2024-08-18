function WeatherTime({ cityDetails }) {
  return (
    <img
      src={cityDetails.weather.IsDayTime ? `/day.svg` : "/night.svg"}
      className="time card-img-top"
    />
  );
}

export default WeatherTime;
