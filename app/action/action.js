import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../reducer/AuthReducer";
import { AddFav, RemoveEverything, RemoveFav } from "../reducer/FavReducer";

export const UserLoginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const UserLoginFaliure = (error) => ({
  type: LOGIN_SUCCESS,
  payload: error,
});

export const UserLogoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const addFavorite = (item) => {
  return {
    type: AddFav,
    payload: item,
  };
};

export const removeFavorite = (article) => {
  return {
    type: RemoveFav,
    payload: article,
  };
};

export const clearFav = () => {
  return {
    type: RemoveEverything,
  };
};
