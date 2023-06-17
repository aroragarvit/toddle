import React from "react";
import { Navigate } from "react-router-dom";

export const Protected = ({ children }) => {
  // change this to firebase auth
  const authentication = true;
  return <>{authentication ? children : <Navigate to={"/auth"} />}</>;
};
