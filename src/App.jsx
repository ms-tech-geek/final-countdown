import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={5} />
        <TimerChallenge title="Not Easy" targetTime={10} />
        <TimerChallenge title="Getting Tough" targetTime={15} />
        <TimerChallenge title="Pros Only" targetTime={30} />
      </div>
    </>
  );
}

export default App;
