import axios from "axios";

export const addFav = (character) => {
  const endpoint = "/rickandmorty/fav";
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
  const endpoint = `/rickandmorty/fav/${id}`;
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

export const filterCards = (gender) => {
  return { type: "FILTER", payload: gender };
};
export const orderCards = (orden) => {
  return { type: "ORDER", payload: orden };
};
