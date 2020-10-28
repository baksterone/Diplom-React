import { Chip } from "@material-ui/core";
import React, { useState } from "react";
import "./ProfilePage.scss";
import { useSelector } from "react-redux";
import { Like } from "../../services/Like";
import ProfilePost from "./ProfilePost/ProfilePost";
import { Link, useHistory } from "react-router-dom";

export const ProfilePage = ({ data }) => {
  const user = useSelector((i) => i.authorize.user.username),
    [follow, setFollow] = useState(data.following),
    userToken = useSelector((i) => i.authorize.user.token),
    history = useHistory(),
    followUrl = `https://conduit.productionready.io/api/profiles/${data.username}/follow`;

  const buttons = () => {
    if (user === data.username) {
      return (
        <Link to="/settings">
          <Chip icon={<i className="fas fa-cog"/>} label="Settings profile" />
        </Link>
      );
    }
    if (follow) {
      return <Chip icon={<i className="fas fa-minus"/>} label="Unfollow" onClick={onFollow} />;
    }
    return <Chip icon={<i className="fas fa-plus"/>} label="Follow" onClick={onFollow} />;
  };
  const onFollow = () => {
    if(!user){
      history.push('/signIn')}
      else{
    let method;
    setFollow((prev) => !prev);
    if (follow) {
      method = "DELETE";
    } else {
      method = "POST";
    }
    Like(followUrl, method, userToken);}
  };
  return (
    <article className="profile">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img alt="user" src={data.image} className="user-img" />
              <h4>{data.username}</h4>
              <div className="buttons">
                <button className="btn btn-sm action-btn btn-outline-secondary">
                {buttons()}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <ProfilePost data={data}/>
          </div>
        </div>
      </div>
    </article>
  );
};
