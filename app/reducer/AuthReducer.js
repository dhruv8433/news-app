const initialState = {
  user: null,
  authenticate: false,
  loading: false,
  error: null,
};

// Define action types (constants)
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const authReducer = (state = initialState, action) => {
  switch (action) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload, //login success then store user information
        authenticate: true,
        loading: false,
        error: null,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        authenticate: true,
        loading: false,
        error: action.payload, //store error if any error occurred and login failed
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        authenticate: false,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
