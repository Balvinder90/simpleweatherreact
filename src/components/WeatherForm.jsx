import { useState } from "react";

function WeatherForm({ setCityQuery }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setCityQuery(query);
    setQuery("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="change-location my-4 text-center text-muted"
    >
      <label htmlFor="city" id="city">
        Enter a location for weather information
      </label>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        name="city"
        className="form-control p-4"
      />
    </form>
  );
}

export default WeatherForm;
