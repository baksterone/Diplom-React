import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SignIn.scss";
import SignInService from "../../services/SignInService";
import { numberTab } from "../../redux/actions";

export const SignIn = () => {
  const [login, setLogin] = useState(""),
    [pass, setPass] = useState(""),
    history = useHistory(),
    dispatch = useDispatch(),
    isAuth = useSelector((state) => state.authorize.user);

  const submit = (e) => {
    e.preventDefault();
    SignInService(login, pass);
    localStorage.setItem("account", `${login} ${pass}`);
    dispatch(numberTab(1));
  };

  useEffect(() => {
    if (isAuth.id !== undefined) {
      history.push("/");
    }
  });

  return (
    <div className="container">
      <div className="row">
        <form
          className="col-md-6 offset-md-3 col-xs-12 sign-in"
          onSubmit={submit}
        >
          <h2>Sign in</h2>
          <Link to="/signUp">
            <span className="to-sign-up">Need an account?</span>
          </Link>
          <div className="form-group">
            <label htmlFor="email-input">Email</label>
            <input
              id="email-input"
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password-input">Password</label>
            <input
              id="password-input"
              type="password"
              className="form-control"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-danger">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};
