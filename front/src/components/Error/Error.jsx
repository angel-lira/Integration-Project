import style from "./Error.module.css";
import image from "../../image/lost.png";

const Error = () => {
  return (
    <div className={style.container}>
      <div className={style.section}>
        <h2>
          Oops! It seems that you have lost. Return to the home page to find
          what you are looking for. Thank you!
        </h2>
        <img src={image} alt="Jerry Smith Lost" />
      </div>
    </div>
  );
};

export default Error;
