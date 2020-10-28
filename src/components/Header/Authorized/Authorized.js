import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { profile, userUrl } from "../../../redux/actions";

export default function Authorized() {
  const userName = useSelector((state) => state.authorize.user.username),
    dispatch = useDispatch(),
    url = `https://conduit.productionready.io/api/articles?author=${userName}&limit=10&offset=`;

  const linkProfile = () => {
    dispatch(profile(userName));
    dispatch(userUrl(url));
  };
  return (
    <nav className="header-nav">
      <ul>
        <li>
          <Link to="/add-post">New Post</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to={`/profile/${userName}`} onClick={linkProfile}>
            {userName}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
