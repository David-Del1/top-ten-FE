
const URL = 'https://nameless-ocean-48788.herokuapp.com/api/v1/players';

export const fetchPlayers = async () => {
  const res = await fetch(URL);
  console.log(res);
  const players = await res.json();

  return players;
};

