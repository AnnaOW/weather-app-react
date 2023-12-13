import "./styles.css";
import Weather from "./Weather";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app container">
        <Weather defaultCity="Rome" />
      </div>
      <footer>
        This project was coded by Anna Oliwia Wierzbicka, and is{" "}
        <a
          href="https://github.com/AnnaOW/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>
        .
      </footer>
    </div>
  );
}
