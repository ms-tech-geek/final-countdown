import { useState, useRef, createRef } from 'react';

export default function Player() {
  const playerNameRef = useRef(null);
  const [playerName, setPlayerName] = useState('');

  const handleClick = () => {
    setPlayerName(() => playerNameRef.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : 'unknown entity'}</h2>
      <p>
        <input ref={playerNameRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
