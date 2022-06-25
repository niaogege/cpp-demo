import React, { useContext, useMemo } from "react";
import { ReactReduxContext } from "./context";

const Provider = ({ children, store }) => {
  const Context = ReactReduxContext;
  const contextValue = { store };
  return <Context.Provider store={contextValue}>{children}</Context.Provider>;
};

export default Provider;
