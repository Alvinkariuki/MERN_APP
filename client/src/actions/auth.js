import * as api from "../api/index";
import * as actionTypes from "../constants/actionTypes";

export const signin = (formData, history) => async (dispatch) => {
  try {
    // Login the user

    const { data } = await api.signin(formData);

    dispatch({ type: actionTypes.AUTH, data });

    history.push("/");
  } catch (err) {
    console.log(err);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    // signup the user
    const { data } = await api.signup(formData);

    dispatch({ type: actionTypes.AUTH, data });

    // Navigate to home page
    history.push("/");
  } catch (err) {
    console.log(err);
  }
};
