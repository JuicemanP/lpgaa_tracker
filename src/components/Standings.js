const Standings = (props) => {
  const flights = props.flights;
  const players = props.players;

  const renderFlight = (flight) => {
    return (
      <div className="flight" key={flight.id}>
        <h3>Flight {flight.id}</h3>
      </div>
    );
  };
  return (
    <>
      {flights.map((flight) => {
        return renderFlight(flight);
      })}
    </>
  );
};

export default Standings;
