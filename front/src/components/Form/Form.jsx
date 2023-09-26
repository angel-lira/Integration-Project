import { useState } from "react";
import validation from "../validation";
import style from "./Form.module.css";
const Form = (props) => {
  //ESTADOS
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  //FUNCIONES
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className={style.container}>
      <form className={style.login}>
        <label className={style.label}>Email: </label>
        <input
          className={style.input}
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.e1 ? (
          <p className={style.errors}>{errors.e1}</p>
        ) : (
          <p className={style.errors}>{errors.e2}</p>
        )}
        <label className={style.label}>Password: </label>
        <input
          className={style.input}
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.p0 ? (
          <p className={style.errors}>{errors.p0}</p>
        ) : errors.p1 ? (
          <p className={style.errors}>{errors.p1}</p>
        ) : errors.p2 ? (
          <p className={style.errors}>{errors.p2}</p>
        ) : errors.p3 ? (
          <p className={style.errors}>{errors.p3}</p>
        ) : errors.p4 ? (
          <p className={style.errors}>{errors.p4}</p>
        ) : (
          <p className={style.errors}>{errors.p5}</p>
        )}
        <button className={style.btn} onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
