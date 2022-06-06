import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UpdatePlayer = (props) => {
  const { players, setPlayers } = props;
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [grossPoints, setGrossPoints] = useState(0);
  const [netPoints, setNetPoints] = useState(0);

  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(() => {
    setFilteredPlayers(
      players.filter((player) => {
        player.name.includes(name);
      })
    );
  }, [name]);

  return (
    <>
      <h3>Select a player to update:</h3>
      <input
        value={name}
        placeholder="Search players here"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {filteredPlayers.map((player) => {
        return (
          <div key={player.id} className="player">
            <span>Name: {player.name} ||</span>
            <span>Flight: {player.flight} || </span>
            <span>Gross Points: {player.gross_points} ||</span>
            <span>Net Points: {player.net_points} ||</span>
          </div>
        );
      })}
    </>
  );
};

export default UpdatePlayer;
