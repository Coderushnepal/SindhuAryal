import React from "react";
import { Route } from "react-router-dom";
import izitoast from "izitoast";

const PrivateRoute = (props) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  
  const handleLogIn = () => {
    setIsLoggedIn(true);
    izitoast.success({
      title: "Private route succeed!",
    });
  };
  if (isLoggedIn) {
    return <Route {...props} />;
  }
  return (
    <div className="center">
      <p>
        I would really appreciate if you provide me the honest feedbacks.<br />
       For this, please{" "}
        </p>
      <button onClick={handleLogIn} className="btn btn-primary">
        Log In
      </button>
    </div>
  );
};
export default PrivateRoute;