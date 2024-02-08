import { useCallback, useMemo, useState } from "react";
import song from "../public/yes.mp3";
import no from "../public/no.mp3";

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handlePlayPause = () => {
    setYesPressed(true);
    const audio = document.getElementById("audio-player") as HTMLAudioElement; // Access the audio element
    const audio1 = document.getElementById("audio-play") as HTMLAudioElement; // Access the audio element

    if (audio1) {
      audio1.pause();
    }

    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }

      setIsPlaying(!isPlaying);
    }
  };
  const handlePlayPause1 = () => {
    // setYesPressed(true);
    const audio = document.getElementById("audio-play") as HTMLAudioElement; // Access the audio element

    if (audio) {
      audio.play();
    }
  };
  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };
  useMemo(() => {
    if (noCount > 0) {
      handlePlayPause1();
    }
  }, [noCount]);
  console.log(yesPressed, ";ls");
  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      <audio id="audio-player" src={song} />
      <audio id="audio-play" src={no} />

      {yesPressed ? (
        <>
          <button onClick={handlePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl font-bold my-4">Ok yay!!!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-4xl my-4">Will you be my Valentine?</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => handlePlayPause()}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
