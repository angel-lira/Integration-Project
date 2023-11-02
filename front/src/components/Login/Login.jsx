import { useState } from "react";
import validation from "../validation";
import style from "./Login.module.css";
import { Link } from "react-router-dom";
const Login = (props) => {
  //ESTADOS
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ allConditions: false });

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
        <p className={style.errors}>{errors.email ? errors.email : "\u00A0"}</p>
        <label className={style.label}>Password: </label>
        <input
          className={style.input}
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <p className={style.errors}>
          {errors.password ? errors.password : "\u00A0"}
        </p>
        <button
          disabled={!errors.allConditions}
          className={style.btn}
          onClick={handleSubmit}
        >
          Iniciar sesión
        </button>
        <p>
          ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
