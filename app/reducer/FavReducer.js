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
        items: Array.isArray(state.items)
          ? [...state.items, action.payload]
          : [action.payload], // Ensure state.items is always an array
      };
    case RemoveFav:
      return {
        ...state,
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
