import style from "./About.module.css";
import image from "../../image/about.png";
const About = () => {
  return (
    <div className={style.container}>
      <div className={style.section}>
        <h2>Somos una wiki de personajes de Rick and Morty!</h2>
        <p>
          Descubre los personajes del loco y emocionante universo de Rick and
          Morty. ¡Sumérgete en el multiverso de la serie más disparatada!
          -"Wubba Lubba Dub Dub!"
        </p>
        <img src={image} alt="Rick Sanchez" />
      </div>
    </div>
  );
};

export default About;
