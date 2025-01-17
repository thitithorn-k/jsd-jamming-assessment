import './TrackList.css';
import Track from '../Track/Track';

function TrackList(props) {
  const tracks = props.tracks.map((track) => (
    <Track 
      key={track.id}
      track={track}
      onAdd={props.onAdd}
      onRemove={props.onRemove}
      isRemoval={props.isRemoval}
      maxWidth={props.maxWidth}
    />
  ));

  return (
    <div className="TrackList">
      {tracks}
    </div>
  );
}

export default TrackList;