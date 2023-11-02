import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { removeFav } from "../../redux/action";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/action";
import style from "./Favorites.module.css";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    if (event.target.value === "All") {
      dispatch(filterCards(null));
    } else {
      dispatch(filterCards(event.target.value));
    }
  };

  return (
    <div className={style.container}>
      <select onChange={handleOrder}>
        <option disabled selected style={{ fontWeight: "bold" }}>
          Order :
        </option>
        <option value="A">Upward</option>
        <option value="D">Down</option>
      </select>

      <select onChange={handleFilter}>
        <option disabled selected style={{ fontWeight: "bold" }}>
          Filter :
        </option>
        <option value="All">All characters</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <div className={style.section}>
        {favorites.map((fav) => {
          return (
            <Card
              key={fav.id}
              id={fav.id}
              name={fav.name}
              status={fav.status}
              species={fav.species}
              origin={fav.origin}
              image={fav.image}
              gender={fav.gender}
              onClose={() => dispatch(removeFav(fav.id))}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
