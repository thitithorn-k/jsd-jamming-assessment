import './Track.css';

function Track(props) {

  const handleClick = () => {
    if(props.isRemoval){
      props.onRemove(props.track);
    } else {
      props.onAdd(props.track);
    }
  }

  return (
    <div className="Track">
      <img src={props.track.images[2].url} />
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>{props.track.artist} | {props.track.album}</p>
      </div>
      <button className="Track-action" onClick={handleClick} >{props.isRemoval? '-': '+'}</button>
    </div>
  );
}

export default Track;
