import React from "react";
import ProfileTabs from "./ProfileTabs/ProfileTabs";
import ProfilePostService from "../../../services/ProfilePostService";

export default function ProfilePost({ data }) {
  const user = data.username;
  return (
    <div className="all-posts">
      <ProfileTabs user={user}/>
      <hr />
      <div className="posts">
        <ProfilePostService user={user} />
      </div>
    </div>
  );
}
