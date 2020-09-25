import React from "react";
import { Redirect, Route } from "react-router-dom";

import * as routes from "../constants/routes";
import Admin from '../components/admin/Admin';

export default function PrivateRoute(props) {
  const isLoggedIn = !!localStorage.getItem("Token");
  console.log(localStorage.getItem("Token"));

  if (isLoggedIn) {
    return <Route {...props} />;
  } else {
    return <Redirect to={routes.ADMIN} component={Admin} />;
  }
}