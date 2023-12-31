import "./App.css";
//DEPEDENCIAS
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
//COMPONENTES
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Favorites from "./components/Favorites/Favorites";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

const App = () => {
  //ESTADOS
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  //FUNCIONES
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const login = async (userData) => {
    const URL = "/rickandmorty/login/";

    try {
      const response = await axios.post(URL, userData);
      const data = response.data;
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSearch = async (id) => {
    try {
      const response = await axios.get(`/rickandmorty/character/${id}`);
      const data = response.data;
      if (data) {
        const character = characters.some(
          (character) => character.id === data.id
        );
        if (character) {
          window.alert("¡Este personaje ya está en la lista!");
        } else {
          //Nota: "oldChars" Es el valor actual del estado characters
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => {
        return character.id !== Number(id);
      })
    );
  };

  //Nota: El useEffect() no permite ver el componente Error.

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      {pathname !== "/" && pathname !== "/register" && (
        <Nav
          onSearch={onSearch}
          characters={characters}
          setCharacters={setCharacters}
        />
      )}
      <Routes>
        <Route path="/" element={<Login login={login} />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
