const initialState = {
  items: [], // Ensure items is initialized as an array
};

export const AddFav = "ADD_FAV";
export const RemoveFav = "REMOVE_FAV";
export const RemoveEverything = "REMOVE_EVERYTHING";

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddFav:
      return {
        ...state,
        items: Array.isArray(state.items) // if state.items is array
          ? [...state.items, action.payload]
          : [action.payload],
      };
    case RemoveFav:
      return {
        ...state,
        // if we want to remove any item redux
        items: state.items.filter(
          (item) => item.title !== action.payload.title
        ),
      };
    case RemoveEverything:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export { favReducer };
