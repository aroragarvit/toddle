import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../config/firebaseConfig.jsx";

export const Protected = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });

    return unsubscribe;
  }, []);

  return <>{authenticated ? children : <Navigate to={"/auth"} />}</>;
};
