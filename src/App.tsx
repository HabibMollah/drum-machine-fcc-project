import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const drumPads = document.querySelectorAll('.drum-pad');
    console.log(drumPads);

    const keys: string[] = [];

    drumPads.forEach((pad) => {
      if (pad.firstElementChild)
        keys.push(pad.firstElementChild?.id.toLowerCase());
    });

    console.log(keys);

    const handleKeyPress = (event: KeyboardEvent) => {
      keys.forEach((key) => {
        if (event.key === key) {
          document.getElementById(key.toUpperCase())?.click();
        }
      });
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.currentTarget.focus();
    e.currentTarget.querySelector('audio')?.play();
    // const buttonNode = e.target as HTMLButtonElement;
    // buttonNode.focus();
    // console.log(buttonNode.innerText);
    console.log(e.currentTarget.id);
    // if (typeof e.currentTarget.querySelector('audio') === 'string')
    setDisplayedText(e.currentTarget.id.toLowerCase());
  };

  return (
    <main id="drum-machine">
      <div id="display">{displayedText}</div>
      <div className="drum-buttons">
        <button onClick={handleClick} className="drum-pad" id="heater1">
          Q <audio className="clip" id="Q" src="/Heater-1.mp3"></audio>
        </button>
        <button onClick={handleClick} className="drum-pad" id="heater2">
          W <audio className="clip" id="W" src="/Heater-2.mp3"></audio>
        </button>
        <button onClick={handleClick} className="drum-pad" id="heater3">
          E <audio className="clip" id="E" src="/Heater-3.mp3"></audio>
        </button>
        <button onClick={handleClick} className="drum-pad" id="heater4">
          A <audio className="clip" id="A" src="/Heater-4_1.mp3"></audio>
        </button>
        <button onClick={handleClick} className="drum-pad" id="clap">
          S <audio className="clip" id="S" src="/Heater-6.mp3"></audio>
        </button>
        <button onClick={handleClick} className="drum-pad" id="openHH">
          D <audio className="clip" id="D" src="/Dsc_Oh.mp3"></audio>
        </button>
        <button onClick={handleClick} className="drum-pad" id="kickNHat">
          Z <audio className="clip" id="Z" src="/Kick_n_Hat.mp3"></audio>
        </button>
        <button onClick={handleClick} className="drum-pad" id="kick">
          X <audio className="clip" id="X" src="/RP4_KICK_1.mp3"></audio>
        </button>
        <button onClick={handleClick} className="drum-pad" id="closedHH">
          C <audio className="clip" id="C" src="/Cev_H2.mp3"></audio>
        </button>
      </div>
    </main>
  );
}

export default App;
