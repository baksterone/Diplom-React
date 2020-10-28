import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Registration } from "../../services/Registration";

export function SignUp() {
  const [user, setUser] = useState(""),
    [pass, setPass] = useState(""),
    [email, setEmail] = useState(""),
    login = useSelector((state) => state.authorize.user),
    history = useHistory();

  const submit = (e) => {
    e.preventDefault();
    Registration(user, email, pass);
    sessionStorage.setItem('account',`${login} ${pass}`)
  };
  useEffect(() => {
    if (login.id !== undefined) {
      history.push("/");
    }
  });
  return (
    <div className="container">
      <div className="row">
        <form
          className="col-md-6 offset-md-3 col-xs-12 sign-up"
          onSubmit={submit}
        >
          <h2>Sign up</h2>
          <Link to="/signIn">
            <span className="to-sign-up">Have an account?</span>
          </Link>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-danger">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
