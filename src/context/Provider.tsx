import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import initialState from "./Store"; // Import the initialState variable from the store
import Reducers from "./Reducers";

const UserProvider = ({ children }) => {
  const userStore = createStore(Reducers, initialState);

  return <Provider store={userStore}>{children}</Provider>;
};

export default UserProvider;


