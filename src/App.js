import "./App.css";

import SearchForm from "./SearchForm";
import CurrentLocationButton from "./CurrentLocationButton";
import WeatherDetails from "./WeatherDetails";

function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <SearchForm />
        <WeatherDetails />
        <CurrentLocationButton />
      </div>
      <small className="author-info">
        <a
          href="https://github.com/Tohan-B/SheCodes-Weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Blessing Itohan
      </small>
    </div>
  );
}

export default App;
