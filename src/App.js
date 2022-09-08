import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="appWrap">
        <form id="city-place">
          <input
            className="form-control"
            type="search"
            placeholder="Type a City"
            autofocus="on"
            autocomplete="off"
            id="city-enter"
          />

          <button type="submit">Search</button>
        </form>
        <h1>
          <span className="city">Vancouver</span>
          <span className="icon">
            {" "}
            <img src="" id="emoji" />
          </span>
        </h1>

        <div className="row">
          <div className="col-3">
            <span className="current-temp">17</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-3">
            <span className="sky"> Overcast Clouds</span>
          </div>

          <div className="col-3">
            <span className="HM">Humidity:30%</span>
          </div>
          <div className="col">
            <span className="WS"> Wind Speed: 10 km</span>
          </div>
        </div>
      </div>
    </div>
  );
}
