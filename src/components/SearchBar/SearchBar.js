/* eslint-disable jsx-a11y/anchor-is-valid */
import './SearchBar.css';

function SearchBar(props) {

  const handleTermChange = (e) => {
    props.onTermChange(e.target.value);
  }
  
  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" value={props.searchTerm} onChange={handleTermChange} />
      <button className="SearchButton" onClick={props.onSearch}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
