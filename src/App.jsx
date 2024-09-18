import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Authentication from "./Authentication/Authentication";
import Homepage from "./Homepage";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        console.log("user is not logged in");
      }
    });
  }, []);

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);
  return (
    <div>
      {isLoading ? (<div className="loader-container">
        <div className="loader"></div>
      </div>) : <>{user ? <Homepage /> : <Authentication />}</>}
    </div>
  );
};

export default App;
