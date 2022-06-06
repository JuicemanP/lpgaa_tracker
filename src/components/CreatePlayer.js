import { useState } from "react";
import BASE_URL from "../baseUrl";

const CreatePlayer = (props) => {
  const { players, setPlayers } = props;
  const [grossPoints, setGrossPoints] = useState(0);
  const [netPoints, setNetPoints] = useState(0);
  const [name, setName] = useState("");
  const [flight, setFlight] = useState();
  const [alert, setAlert] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("flight", flight);
    formData.append("grossPoints", grossPoints);
    formData.append("netPoints", netPoints);

    try {
      const response = await fetch(`${BASE_URL}/players`, {
        method: "POST",
        body: formData,
      });
      const info = await response.json();
      const newPlayers = players;
      newPlayers.push(info);
      setPlayers(newPlayers);
      setAlert("Created new player:", info.name);
      return info;
    } catch (error) {
      setAlert(error);
    }
  };

  return (
    <>
      <h3>Create a New Player:</h3>
      <form onSubmit={handleSubmit}>
        <label>Player Name:</label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Player Name"
        />
        <label>Flight:</label>
        <select
          value={flight}
          onChange={(e) => {
            setFlight(e.target.value);
          }}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
        <label>Starting Gross Points:</label>
        <input
          value={grossPoints}
          onChange={(e) => {
            setGrossPoints(e.target.value);
          }}
        />
        <label>Starting Net Points:</label>
        <input
          value={netPoints}
          onChange={(e) => {
            setNetPoints(e.target.value);
          }}
        />
        <button>Submit Player</button>
      </form>
      <h3>{alert}</h3>
    </>
  );
};

export default CreatePlayer;
