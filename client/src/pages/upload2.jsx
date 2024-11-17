import React, { useState } from 'react';
import Upload from './upload'; // Import Upload component
import EchoBeat from './EchoBeat'; // Import EchoBeat component

const App = () => {
  const [trendingSongs, setTrendingSongs] = useState([]);
  
  const handleNewSongUpload = (newSong) => {
    setTrendingSongs((prevSongs) => [...prevSongs, newSong]);
  };

  return (
    <div>
      <Upload onSongUpload={handleNewSongUpload} />  {/* Pass handler to Upload */}
      <EchoBeat trendingSongs={trendingSongs} />    {/* Pass trendingSongs to EchoBeat */}
    </div>
  );
};

export default App;
