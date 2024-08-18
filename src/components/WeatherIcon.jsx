function WeatherIcon({ cityDetails }) {
  return (
    <div className="icon bg-light mx-auto text-center">
      <img src={`/icons/${cityDetails.weather.WeatherIcon}.svg`} alt="" />
    </div>
  );
}

export default WeatherIcon;
