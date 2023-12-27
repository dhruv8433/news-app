import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../reducer/AuthReducer";
import { AddFav, RemoveEverything, RemoveFav } from "../reducer/FavReducer";

// when user login successfully
export const UserLoginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

// when some error occurs during login
export const UserLoginFaliure = (error) => ({
  type: LOGIN_SUCCESS,
  payload: error,
});

// when user logged out successfully
export const UserLogoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

// when user add articles to favorites
export const addFavorite = (item) => {
  return {
    type: AddFav,
    payload: item,
  };
};

// when user remove articles from favorites
export const removeFavorite = (article) => {
  return {
    type: RemoveFav,
    payload: article,
  };
};

// when user logged out than also clear their favorites
export const clearFav = () => {
  return {
    type: RemoveEverything,
  };
};
