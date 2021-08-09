import React from 'react';
import { usePlayers } from '../../state/player';
import Player from './Player';

function PlayerList() {
  const { players, loading } = usePlayers();

  if(loading) return <h1>Loading...</h1>;

  const playerElements = players.map(player => (
    <li key={player.id}>
      <Player {...player} />
    </li>
  ));

  return (
    <>
      <ul>
        {playerElements}
      </ul>
    </>
  );
}

export default PlayerList;
