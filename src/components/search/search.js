import "./search.css";

const Search = ({ onClick, onChange, val }) => {
  const handleChangeName = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Enter your city..."
        onChange={handleChangeName}
        value={val}
      />
      <button onClick={onClick} className="btn search__btn">
        Search
      </button>
    </div>
  );
};

export default Search;
