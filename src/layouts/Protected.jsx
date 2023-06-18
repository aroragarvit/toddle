import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../config/firebaseConfig";

export const Protected = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  auth.onAuthStateChanged((user) => {
    if (user) {
      setAuthenticated(true);
    }
  });
  return <>{authenticated ? children : <Navigate to={"/auth"} />}</>;
};
