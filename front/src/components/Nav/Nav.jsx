import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import axios from "axios";
import imgRandom from "../../image/random.png";
import imgLogout from "../../image/logout.png";
const Nav = (props) => {
  const onSearchRandom = async () => {
    const min = 1;
    const max = 826;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    try {
      const response = await axios.get(
        `http://localhost:3001/rickandmorty/character/${randomNumber}`
      );
      const data = response.data;

      if (data) {
        const character = props.characters.some(
          (character) => character.id === data.id
        );
        if (character) {
          window.alert("¡Este personaje ya está en la lista!");
        } else {
          //Nota: "oldChars" Es el valor actual del estado characters
          props.setCharacters((oldChars) => [...oldChars, data]);
        }
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={style.navbar}>
      <div className={style.navbarLeft}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>

        <Link to="/favorites">Favorites</Link>
      </div>
      <div className={style.navbarRight}>
        <SearchBar onSearch={props.onSearch} />
        <button onClick={onSearchRandom}>
          <img src={imgRandom} alt="Button Random" className={style.random} />
        </button>
        <Link to="/">
          <img
            src={imgLogout}
            alt="Button Log Out"
            className={style.logoutIcon}
          />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
