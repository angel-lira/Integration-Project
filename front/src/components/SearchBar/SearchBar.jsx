import { useState } from "react";
import style from "./SearchBar.module.css";
import imgSearch from "../../image/search.png";
const SearchBar = (props) => {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={style.container}>
      <input
        type="search"
        value={id}
        onChange={handleChange}
        placeholder="Search character by ID"
      />
      <button onClick={() => props.onSearch(id)}>
        <img src={imgSearch} alt="Button Search" className={style.searchIcon} />
      </button>
    </div>
  );
};

export default SearchBar;
