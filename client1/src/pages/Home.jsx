import React, { useState, useEffect, useRef } from 'react';
import './home.css';
import logo from './logo.png';
import shuffleIcon from './shufflenew.png';
import prevIcon from './prevnew.png';
import playIcon from './playnew.png';
import pauseIcon from './pausenew.png';
import nextIcon from './nextnew.png';
import repeatIcon from './repeatnew.png';
import song1 from './song1.mp3';
import song2 from './song2.mp3';
import song3 from './song3.mp3';
import imagee from './card3img.jpeg';

const EchoBeat = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // For tracking current playback time
  const [buttonImage, setButtonImage] = useState(playIcon);
  const [duration, setDuration] = useState(0); // For the total song duration
  

  useEffect(() => {
    if (audioReff.current) {
      audioReff.current.ontimeupdate = () => {
        setCurrentTime(audioReff.current.currentTime);
      };

      // Set duration when audio metadata is loaded
      audioReff.current.onloadedmetadata = () => {
        setDuration(audioReff.current.duration);
      };
    }
  }, []);

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    setCurrentTime(newTime);
    if (audioReff.current) {
      audioReff.current.currentTime = newTime; // Seek the song
    }
  };

  
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };


  const audioReff = useRef(null);
  const playSong = (audioname) => {
    // Set the new audio source
    // setAudioSrc(audioname);
    audioReff.current.src = audioname;
    // Play the audio
    if (audioReff.current) {
      audioReff.current.play();
      setIsPlaying(true);
    }
    setButtonImage(pauseIcon);
    
    // Update the play state
  };
  
  const togglePlayPause = () => {
    if (isPlaying) {
      audioReff.current.pause();
      setButtonImage(playIcon);
      setIsPlaying(false);
    } else {
      audioReff.current.play();
      setButtonImage(pauseIcon);
      setIsPlaying(true);
    }
  };


  return (
    <>
      <header>
        <title>EchoBeat</title>
      </header>


      <div className="main">
        <div className="main-content">
          <h4>Recently Played</h4>
          <div className="cards-container">
            <div className="card" onClick={() => playSong(song1)}>
              <img src={imagee} className="card-image" alt="Top 50 - Global" />
              <p className="card-title">Top 50 - Global</p>
              <p className="card-info">Your daily updates on the most played...</p>
            </div>
          </div>

          <h4>Trending near you</h4>
          <div className="cards-container">
            {Array(5).fill().map((_, index) => (
              <div key={index} className="card" onClick={() => playSong(song1)}>
                <img src={imagee} className="card-image" alt="Top 50 - Global" />
                <p className="card-title">Top 50 - Global</p>
                <p className="card-info">Your daily updates on the most played...</p>
              </div>
            ))}
          </div>
          <h4>Featured Charts</h4>
          <div className="cards-container">
            <div className="card" onClick={() => playSong(song1)}>
              <img src="card3img.jpeg" className="card-image" alt="Top 50 - Global" />
              <p className="card-title">Top 50 - Global</p>
              <p className="card-info">Your daily updates on the most played...</p>
            </div>
            <div className="card" onClick={() => playSong(song1)}>
              <img src="card3img.jpeg" className="card-image" alt="Top Songs - India" />
              <p className="card-title">Top Songs - India</p>
              <p className="card-info">Your daily updates on the most played...</p>
            </div>
            <div className="card" onClick={() => playSong(song1)}>
              <img src="card3img.jpeg" className="card-image" alt="Top 50 - Global" />
              <p className="card-title">Top 50 - Global</p>
              <p className="card-info">Your daily updates on the most played...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="musicplayer">
        <div className="album"></div>
        <div className="player">
          <div className="player-controls">
            <img src={shuffleIcon} className="player-control-icon" alt="Shuffle"  />
            <img src={prevIcon} className="player-control-icon" alt="Previous"  />
            <img
              src={buttonImage}
              className="player-control-icon play-button"
              // alt={isPlaying ? "Pause" : "Play"} 
              onClick={togglePlayPause}
            />
            <img src={nextIcon} className="player-control-icon" alt="Next"  />
            <img src={repeatIcon} className="player-control-icon" alt="Repeat"  />
          </div>
          {/* <audio src="" id='audio'></audio> */}
          <audio id='audio'  ref={audioReff}  onEnded={() => setIsPlaying(false)}></audio>
          <div className="playback-bar">
            {/* <span className="curr-time time">{currentTime.toFixed(2)}</span> */}
            <span className="curr-time time">{formatTime(currentTime)}</span>

            <input
              type="range"
              min="0"
              max="100"
              value={(currentTime / duration) * 100 || 0}
              className="progress-bar"
              onChange={handleProgressChange}
            />
            {/* <span className="tot-time time">{duration.toFixed(2)}</span> */}
            <span className="tot-time time">{formatTime(duration)}</span>
          </div>
        </div>
        <div class="controls"></div>

      </div>
    </>
  );
};

export default EchoBeat;
