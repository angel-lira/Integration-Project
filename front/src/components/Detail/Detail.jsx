import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";
const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      (response) => {
        const data = response.data;
        if (data) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.container}>
      <div>
        <p className={style.title}>{character.name}</p>
        <img src={character.image} alt={character.name} />
        <p className={style.description}>
          <strong>Status : </strong>
          {character.status}
        </p>
        <p className={style.description}>
          <strong>Species : </strong>
          {character.species}
        </p>
        <p className={style.description}>
          <strong>Gender : </strong>
          {character.gender}
        </p>
        <p className={style.description}>
          <strong>Origin : </strong>
          {character.origin?.name}
        </p>
      </div>
    </div>
  );
};

export default Detail;
