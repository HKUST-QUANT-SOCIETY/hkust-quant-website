import axios from "axios";
import { USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNOUT } from "./userConstants";
import { saveUserAuth, clearUserAuth } from "./authStorage";

export const signin = (name, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { name, password } });
  try {
    const { data } = await axios.post("/api/users/login", { name, password });
    saveUserAuth(data);
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signout = () => (dispatch) => {
  clearUserAuth();
  dispatch({ type: USER_SIGNOUT });
};
