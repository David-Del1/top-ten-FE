import React from 'react';

function Player({ name, image, years_played, championships_won, total_points, 
fg_percentage, blocks, assists }) {
  return (
    <>
      <h1> {name} </h1>
      <img src={image} alt={name} />
      <h2> {years_played} </h2>
      <h3>Rings: {championships_won} </h3>
      <p>Career points: {total_points} </p>
      <p>FG%: {fg_percentage}</p>
      <p>Blocks: {blocks}</p>
      <p>Assists: {assists}</p>
    </>
  );
}

export default Player;
