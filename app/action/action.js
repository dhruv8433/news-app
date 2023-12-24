import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../reducer/AuthReducer";

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
