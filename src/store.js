import { userSigninReducer } from "./auth/userReducers.js"
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {thunk} from "redux-thunk";
import { loadUserAuth } from "./auth/authStorage.js";

const persistedUser = loadUserAuth();

const initialState = {
    userSignin: {
        userInfo: persistedUser || null
      },
};

const reducer = combineReducers({
    userSignin: userSigninReducer,
  });

const store = createStore(reducer, initialState, applyMiddleware(thunk));



export default store;