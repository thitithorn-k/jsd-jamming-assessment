import { useState } from 'react';

import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

import Spotify from '../../utils/Spotify';

function App() {
  Spotify.getAccessToken();

  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addTrack = (track) => {
    const foundInPlaylist = playlistTracks.find(playlistTrack => playlistTrack.id === track.id);
    if(foundInPlaylist) return;
    setPlaylistTracks((prev) => [
      ...prev,
      track
    ]);
    setSearchResults((prev) => prev.filter((prev_track) => prev_track.id != track.id));
  }

  const removeTrack = (track) => {
    setPlaylistTracks((prev) => prev.filter((prev_track) => prev_track.id !== track.id));

    const addTop = searchResults.filter((searchTrack) => searchTrack.localIndex < track.localIndex);
    const addBottom = searchResults.filter((searchTrack) => searchTrack.localIndex > track.localIndex);
    setSearchResults([
      ...addTop,
      track,
      ...addBottom
    ])
  }

  const updatePlaylistName = (newName) => {
    setPlaylistName(newName);
  }

  const savePlaylist = () => {
    const trackIds = playlistTracks.map((track) => track.id)
    Spotify.savePlaylist(playlistName? playlistName: 'New playlist', trackIds).then(setPlaylistTracks([]));
  }

  const updateTerm = (newTerm) => {
    setSearchTerm(newTerm);
  }

  const search = () => {
    Spotify.search(searchTerm).then((res) => setSearchResults(res));
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar searchTerm={searchTerm} onTermChange={updateTerm} onSearch={search}/>
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist} />
        </div>
      </div>
    </div>
  );
}

export default App;
