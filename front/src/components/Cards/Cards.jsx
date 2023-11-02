import Card from "../Card/Card";
import style from "./Cards.module.css";
const Cards = (props) => {
  return (
    <div className={style.container}>
      {props.characters.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            type={character.type}
            gender={character.gender}
            origin={character.origin.name}
            location={character.location.name}
            image={character.image}
            onClose={props.onClose}
          />
        );
      })}
    </div>
  );
};

export default Cards;
