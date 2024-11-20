
import React, { useState, useEffect, useRef } from 'react';
import './home.css';
import logo from './logo.png';
import shuffleIcon from './shufflenew.png';
import prevIcon from './prevnew.png';
import playIcon from './playnew.png';
import nextIcon from './nextnew.png';
import repeatIcon from './repeatnew.png';
import song1 from './song1.mp3';
import song2 from './song2.mp3';
import song3 from './song3.mp3';
import song4 from './song4.mp3';
import song5 from './song5.mp3';
import song1img from './song1img.jpg';
import song2img from './song2img.jpg';
import song3img from './song3img.jpg';
import song4img from './song4img.jpg';
import song5img from './song5img.jpg';

class DoublyLinkedListNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new DoublyLinkedListNode(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }

  nextNode(currentNode) {
    return currentNode?.next || null;
  }

  prevNode(currentNode) {
    return currentNode?.prev || null;
  }
}

const EchoBeat = () => {
  const songs = [
    { src: song1, image: song1img },
    // { src: song2, image: song2img },
    { src: song3, image: song3img },
    { src: song4, image: song4img },
    { src: song5, image: song5img },
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);
  const playbackHistory = useRef(new DoublyLinkedList());
  const songStack = useRef([]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.ontimeupdate = () => {
        setCurrentTime(audioRef.current.currentTime);
      };

      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current.duration);
      };

      audioRef.current.onended = () => {
        handleNext();
      };
    }

    // Add all songs to doubly linked list
    songs.forEach((song) => playbackHistory.current.append(song));
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const currentSong = playbackHistory.current.find(songs[currentSongIndex]);
    const nextSong = playbackHistory.current.nextNode(currentSong);

    if (nextSong) {
      setCurrentSongIndex(songs.indexOf(nextSong.value));
      playSong(nextSong.value);
    } else {
      setCurrentSongIndex(0); // Loop back to start
      playSong(songs[0]);
    }
  };

  const handlePrev = () => {
    const currentSong = playbackHistory.current.find(songs[currentSongIndex]);
    const prevSong = playbackHistory.current.prevNode(currentSong);

    if (prevSong) {
      setCurrentSongIndex(songs.indexOf(prevSong.value));
      playSong(prevSong.value);
    }
  };

  const playSong = (song) => {
    if (audioRef.current) {
      audioRef.current.pause(); // Pause current playback
      if (audioRef.current.src !== song.src) {
        audioRef.current.src = song.src; // Update the source only if it's different
      }
      audioRef.current.load(); // Force reload to ensure the new song plays
      audioRef.current.play();
      setIsPlaying(true);

      // Push the song onto the stack for undo
      songStack.current.push(song);
    }
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  return (
    <>
      <header>
        <title>EchoBeat</title>
      </header>

      <div className="main">
        <div className="main-content">
          <h4>Trending near you</h4>
          <div className="cards-container">
            {songs.map((song, index) => (
              <div key={index} className="card" onClick={() => playSong(song)}>
                <img src={song.image} className="card-image" alt={`Song ${index + 1}`} />
                <p className="card-title">Song {index + 1}</p>
                <p className="card-info">Your daily updates on the most played...</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="musicplayer">
        <div className="player">
      
          <div className="player-controls">
            <img src={shuffleIcon} className="player-control-icon" alt="Shuffle" />
            <img src={prevIcon} className="player-control-icon" alt="Previous" onClick={handlePrev} />
            <img
              src={playIcon}
              className="player-control-icon play-button"
              onClick={handlePlayPause}
            />
            <img src={nextIcon} className="player-control-icon" alt="Next" onClick={handleNext} />
            <img src={repeatIcon} className="player-control-icon" alt="Repeat" />
          </div>

          <audio id="audio" ref={audioRef}></audio>

          <div className="playback-bar">
            <span className="curr-time time">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max="100"
              value={(currentTime / duration) * 100 || 0}
              className="progress-bar"
              onChange={handleProgressChange}
            />
            <span className="tot-time time">{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EchoBeat;
