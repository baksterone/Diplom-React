import React from "react";
import Tabs from "./Tabs/Tabs";
import PostsService from "../../../services/PostsService";

export default function Posts() {
  return (
    <div className="all-posts">
      <Tabs />
      <PostsService />
    </div>
  );
}
