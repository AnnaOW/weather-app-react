import "./styles.css";
import Search from "./Search";
import "./Search.css";
import Summary from "./Summary";
import "./Summary.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app container">
        <Search />
        <h1>
          <strong>Verona</strong>
        </h1>
        <h4>Friday, 24 November 2023, 20:11</h4>

        <img
          className="weather-picture"
          src="https://media.istockphoto.com/id/1368722560/it/vettoriale/disegno-cute-sun-cartoon-illustrazione-vettoriale-su-sfondo-bianco-illustrazione.jpg?s=1024x1024&w=is&k=20&c=sZ5985JBfghfSjY9T_htzk2dR1YVtQ78plok8nzW3vU="
          alt="Sun"
        />

        <Summary />
      </div>
      <footer>
        This project was coded by Anna Oliwia Wierzbicka, and is{" "}
        <a href="https://github.com/AnnaOW/weather-app-react">open-sourced</a>.
      </footer>
    </div>
  );
}
