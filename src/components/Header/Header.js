import React from "react";
import { Link } from "react-router-dom";
import Authorized from "./Authorized/Authorized";
import "./Header.scss";
import NotAuthorized from "./NotAuthorized/NotAuthorized";
import { useSelector, useDispatch } from "react-redux";
import { userUrl } from "../../redux/actions";

export const Header = () => {
  const auth = useSelector((state) => state.authorize.user);
  const dispatch = useDispatch();
  const url = useSelector((state) => state.authorize.url);
  const isAuth = () => {
    return auth.id === undefined ? <NotAuthorized /> : <Authorized />;
  };

  return (
    <header>
      <nav className="navigation">
        <div className="center">
          <div className="logo">
            <Link to="/" onClick={() => dispatch(userUrl(url))}>
              <h4 className="main-logo-img">NewsBlog</h4>
            </Link>
          </div>
          {isAuth()}
        </div>
      </nav>
    </header>
  );
};
