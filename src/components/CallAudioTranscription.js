import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { FaPlay, FaPause } from "react-icons/fa";

const CallAudioTranscription = ({ data }) => {
  const location = useLocation();
  const call = location.state;

  const [audioURL, setAudioURL] = useState("");
  const [transcriptionData, setTranscriptionData] = useState([]);
  const [displayedText, setDisplayedText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");

  const audioRef = useRef(null);

  useEffect(() => {
    if (call) {
      let audioPath = call["Audio"] ? `${process.env.PUBLIC_URL}${call["Audio"]}` : "";
      setAudioURL(audioPath);

      let processedText = call["Audio_Transcription"] || "No transcription available.";

      // Speaker handling for new lines
      let formattedText = processedText
        .replace(/\n+/g, " ") 
        .replace(/Speaker 0:/g, "\n ") 
        .replace(/Speaker 1:/g, "\n ") 
        .trim();

      let words = formattedText.split(" ");
      let wordTiming = words.map((word, index) => ({
        time: index * 0.3, 
        text: word,
      }));

      setTranscriptionData(wordTiming);
    }
  }, [call]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || transcriptionData.length === 0) return;

    const updateText = () => {
      if (!isPlaying) return;
      const current = audio.currentTime;

      let wordsToShow = transcriptionData
        .filter(word => word.time <= current)
        .map(word => word.text)
        .join(" ");

      setDisplayedText(wordsToShow);
    };

    const updateProgress = () => {
      if (!audio) return;
      setProgress((audio.currentTime / audio.duration) * 100);
      setCurrentTime(formatTime(audio.currentTime));
    };

    const interval = setInterval(() => {
      updateText();
      updateProgress();
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, transcriptionData]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleLoadedMetadata = () => {
    setDuration(formatTime(audioRef.current.duration));
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;
    const newTime = (event.target.value / 100) * audio.duration;
    audio.currentTime = newTime;
    setProgress(event.target.value);
  };

  return (
    <div className="w-full mx-auto bg-white rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2 text-black">Call Recording</h2>
      <p className="text-sm text-gray-500 mb-4">Audio playback with transcript</p>

      {audioURL ? (
        <>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                if (audioRef.current.paused) {
                  audioRef.current.play();
                  setIsPlaying(true);
                } else {
                  audioRef.current.pause();
                  setIsPlaying(false);
                }
              }}
              className="bg-purple-700 text-white p-3 rounded-full shadow-md hover:bg-purple-800 transition-all"
            >
              {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
            </button>

            <div className="flex-1 flex items-center space-x-3">
              <input
                type="range"
                className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                value={progress}
                onChange={handleSeek}
                style={{
                    background: `linear-gradient(to right, #90119B ${progress}%, #ddd ${progress}%)`,
                  }}                  
              />

              <div className="flex items-center space-x-2">
                <span className="text-sm">{currentTime}</span>
                <span className="text-sm">/</span>
                <span className="text-sm">{duration}</span>
              </div>
            </div>
          </div>

          <audio
            ref={audioRef}
            preload="auto"
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
          >
            <source src={audioURL} type="audio/mp4" />
            Your browser does not support the audio element.
          </audio>
        </>
      ) : (
        <p className="text-gray-500">Audio file not available.</p>
      )}

      {/* Updated Displayed Text with Conditional Purple Line */}
      {displayedText && (
        <div
          className="mt-4 py-2 px-0 pl-2 whitespace-pre-line overflow-y-auto max-h-60"
          style={{ borderLeft: displayedText ? "2px solid #90119B" : "none" }}
        >
          <p className="mt-0 text-[14px] text-black-900 text-sm">{displayedText}</p>
        </div>
      )}
      
      <style>
        {`
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 12px;
            height: 12px;
            background: #90119B;
            border-radius: 50%;
            cursor: pointer;
          }
          input[type="range"]::-moz-range-thumb {
            width: 12px;
            height: 12px;
            background: #90119B;
            border-radius: 50%;
            cursor: pointer;
          }
          button:focus {
            outline: none !important;
            box-shadow: none !important;
            background-color: #90119B !important;
          }
        `}
      </style>
    </div>
  );
};

export default CallAudioTranscription;