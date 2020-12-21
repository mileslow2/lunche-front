import { createStore } from "redux";

const initialState = {
  latitude: 0,
  longitude: 0,
  id: -1
};

const reducer = function(state, action) {
  return action.payload;
};

export const Store = createStore(reducer, initialState);

export const FocusChange = createStore(reducer, false);

export const HamburgerHandler = createStore(reducer, true);

export const FromSearch = createStore(reducer, false);
