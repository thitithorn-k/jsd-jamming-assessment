import TrackList from '../TrackList/TrackList';
import './Playlist.css';

function Playlist(props) {

  const handleNameChange = (e) => {
    props.onNameChange(e.target.value);
  }

  return (
    <div className="Playlist">
      <input value={props.playlistName} onChange={handleNameChange} placeholder='New Playlist' />
      <TrackList tracks={props.playlistTracks} onRemove={props.onRemove} isRemoval={true} />
      <button className="Playlist-save" onClick={props.onSave} >SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
