import React from "react"; //optional
import Player from "./Player";
import { preparePlayerData } from "../helpers/playerHelpers";

function PlayerList(props) {
  const onePlayer = props.playerData[0];
  const players = props.playerData.map((player) => {
    return (
      <Player
        key={player.gamerTag}
        firstName={player.firstName}
        lastName={player.lastName}
        wins={player.wins}
      />
    );
  });

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {players}
    </section>
  );
}

// console.log(PlayerList());

export default PlayerList;
