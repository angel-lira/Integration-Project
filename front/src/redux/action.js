import axios from "axios";

export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  try {
    return async (dispatch) => {
      const response = await axios.post(endpoint, character);
      const data = response.data;

      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
};

export const removeFav = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  try {
    return async (dispatch) => {
      const response = await axios.delete(endpoint);
      const data = response.data;

      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
};

// export const addFav = (characters) => {
//   return { type: "ADD_FAV", payload: characters };
// };
// export const removeFav = (id) => {
//   return { type: "REMOVE_FAV", payload: id };
// };
export const filterCards = (gender) => {
  return { type: "FILTER", payload: gender };
};
export const orderCards = (orden) => {
  return { type: "ORDER", payload: orden };
};
