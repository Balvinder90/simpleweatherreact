import WeatherForm from "./WeatherForm";
import WeatherBox from "./WeatherBox";
import WeatherTime from "./WeatherTime";
import WeatherIcon from "./WeatherIcon";
import WeatherDetails from "./WeatherDetails";
import { useEffect, useState } from "react";
import { updateCity } from "../js/forecast";

function WeatherCard() {
  const [cityQuery, setCityQuery] = useState("");
  const [cityDetails, setCityDetails] = useState(null);

  useEffect(
    function () {
      if (!cityQuery.length) return;
      updateCity(cityQuery).then((data) => setCityDetails(data));
    },
    [cityQuery]
  );

  return (
    <div className="container my-5 mx-auto">
      <WeatherForm setCityQuery={setCityQuery} />
      {cityDetails && (
        <WeatherBox>
          <WeatherTime cityDetails={cityDetails} />
          <WeatherIcon cityDetails={cityDetails} />
          <WeatherDetails cityDetails={cityDetails} />
        </WeatherBox>
      )}
    </div>
  );
}

export default WeatherCard;
