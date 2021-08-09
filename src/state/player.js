import { useEffect, useState } from 'react';
import { fetchPlayers } from '../components/services/playerApi';

export const usePlayers = () => {
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers()
      .then(setPlayers)
      .finally(() => setLoading(false));
  }, []);

  return { players, loading };
};

