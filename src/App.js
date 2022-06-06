import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BASE_URL from "./baseUrl";
import Standings from "./components/Standings";
import CreatePlayer from "./components/CreatePlayer";
import UpdatePlayer from "./components/UpdatePlayer";

function App() {
  const [players, setPlayers] = useState([]);
  const [flights, setFlights] = useState([]);

  const fetchPlayers = async () => {
    const response = await fetch(`${BASE_URL}/players`, {
      contentType: "application/json",
    });
    const info = await response.json();
    return info;
  };

  const fetchFlights = async () => {
    const response = await fetch(`${BASE_URL}/flights`, {
      contentType: "application/json",
    });
    const info = await response.json();
    return info;
  };

  useEffect(() => {
    const fetchStandings = async () => {
      const fetchedFlights = await fetchFlights();
      setFlights(fetchedFlights);
      console.log(flights, "Flights set");
      const players = await fetchPlayers();
      setPlayers(players);
      console.log("Players Set");
      return;
    };
    fetchStandings();
  }, []);

  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/standings"
              element={<Standings flights={flights} players={players} />}
            />
            <Route
              path="/create-player"
              element={
                <CreatePlayer players={players} setPlayers={setPlayers} />
              }
            />
            <Route
              path="/update-player"
              element={
                <UpdatePlayer players={players} setPlayers={setPlayers} />
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
