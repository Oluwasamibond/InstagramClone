import React, { useState } from "react";
import "./Authentication.css";
import Login from "./Login";
import Signup from "./Signup";

const Authentication = () => {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };
  return (
    <div className="authentication">
      <div className="auth_left">
        <img src="https://i.imgur.com/P3Vm1Kq.png" alt="" />
      </div>
      <div className="auth_right">
        {active === "login" ? <Login /> : <Signup />}
        <div className="auth_more">
          <span>
            {active === "login" ? (
              <>
                Don't have an account?{" "}
                <button onClick={handleChange}>Sign up</button>
              </>
            ) : (
              <>
                Already have an account? <button onClick={handleChange}>Login</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
