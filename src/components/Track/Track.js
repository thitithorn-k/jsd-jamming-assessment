import './Track.css';

function Track(props) {

  const handleClick = () => {
    if(props.isRemoval){
      props.onRemove(props.track);
    } else {
      props.onAdd(props.track);
    }
  }

  console.log(props)

  return (
    <div className="Track">
      <img src={props.track.images[2].url} />
      <div className="Track-information" style={{maxWidth: props.maxWidth}}>
        <h3><a href={'https://open.spotify.com/track/'+props.track.id} target='_blank' >{props.track.name}</a></h3>
        <p>{props.track.artist} | {props.track.album}</p>
      </div>
      <button className="Track-action" onClick={handleClick} >{props.isRemoval? '-': '+'}</button>
    </div>
  );
}

export default Track;
