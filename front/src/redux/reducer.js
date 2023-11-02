const initialState = {
  allCharacters: [],
  myFavorites: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case "REMOVE_FAV":
      return {
        ...state,
        myFavorites: action.payload,
      };
    case "FILTER":
      return {
        ...state,
        myFavorites:
          action.payload === null
            ? state.allCharacters
            : state.allCharacters.filter(
                (fav) => fav.gender === action.payload
              ),
        //Nota: Si el value que recibe "FILTER" esta vacio filter() esta creando un nuevo array ¡vacio! o asi parece.
      };
    case "ORDER":
      let filteredCharacters;

      if (action.payload === "A") {
        filteredCharacters = [...state.allCharacters].sort(
          (a, b) => a.id - b.id
        );
      } else if (action.payload === "D") {
        filteredCharacters = [...state.allCharacters].sort(
          (a, b) => b.id - a.id
        );
      } else {
        filteredCharacters = state.allCharacters;
      }

      return {
        ...state,
        myFavorites: filteredCharacters,
      };
    default:
      return { ...state };
  }
};
export default reducer;
