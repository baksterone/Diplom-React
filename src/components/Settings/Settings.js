import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userUrl, logout, numberTab } from "../../redux/actions";
import { NewSettings } from "../../services/Settings";
import "./Settings.scss";

export const Settings = () => {
  const dispatch = useDispatch(),
    history = useHistory(),
    state = useSelector((i) => i.authorize.user),
    [img, setImg] = useState(),
    [name, setName] = useState(state.username),
    [bio, setBio] = useState(),
    [email, setEmail] = useState(state.email),
    [pass, setPass] = useState(),
    url = "https://conduit.productionready.io/api/articles?limit=10&offset=";

    const out = () => {
      dispatch(logout())
      history.push('/')
      localStorage.removeItem('account')
      dispatch(numberTab(1));
      dispatch(userUrl(url))
    }
  const submit = (e) => {
    e.preventDefault();
    NewSettings(img, name, bio, email, pass, state);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12 settings">
          <form onSubmit={submit}>
            <h2>Your Settings</h2>
            <div className="form-group">
              <label>URL of profile picture</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={(e) => setImg(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>New username</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Short bio about you</label>
              <textarea
                className="form-control"
                rows="3"
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label>New email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>New password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Update settings
            </button>
            <hr />
          </form>
          <div className="log-out-block">
            <button
              type="submit"
              className="btn btn-danger logout"
              onClick={out}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
