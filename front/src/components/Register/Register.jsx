import { useState } from "react";
import validation from "../validation";
import style from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const navigate = useNavigate();

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

  const register = async () => {
    try {
      const response = await axios.post("/rickandmorty/register", userData);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    register();
  };

  return (
    <div className={style.container}>
      <form className={style.register}>
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
          Registrarse
        </button>
        <p>
          ¿Tienes una cuenta? <Link to="/">Inicia sesión aquí</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
