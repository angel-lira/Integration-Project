import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import style from "./Card.module.css";
const Card = (props) => {
  const [isFav, setIsFav] = useState(false);

  //FUNCIONES
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);
  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [favorites]);

  const handleFavorite = () => {
    if (isFav) {
      dispatch(removeFav(props.id));
    } else {
      dispatch(addFav(props));
    }
    setIsFav(!isFav);
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>{props.name}</h2>
      {pathname !== "/favorites" ? (
        isFav ? (
          <button className={style.btnAdded} onClick={handleFavorite}>
            ❤️ Added to Favorites
          </button>
        ) : (
          <button className={style.btnAdd} onClick={handleFavorite}>
            🤍 Add to Favorites
          </button>
        )
      ) : null}

      <Link to={`/detail/${props.id}`}>
        <img className={style.img} src={props.image} alt={props.name} />
      </Link>

      <button
        className={style.btnDelete}
        onClick={() => props.onClose(props.id)}
      >
        DELETE
      </button>
    </div>
  );
};

export default Card;
