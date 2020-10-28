import React from "react";
import { Async } from "react-async";
import { useSelector } from "react-redux";
import { PostPage } from "../components/PostPage/PostPage";
import Spinner from "../components/spinner";

export const PostPageService = ({ match }) => {
  const token = useSelector((i) => i.authorize.user.token);
  const headers = () => {
    if (token) {
      return {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json; charset=utf-8",
      };
    }
    return { "Content-Type": "application/json; charset=utf-8" };
  };
  const loadPost = () =>
    fetch(
      `https://conduit.productionready.io/api/articles/${match.params.article}`,
      {
        headers: headers(),
      }
    )
      .then((res) => (res.ok ? res : Promise.reject(res)))
      .then((res) => res.json());
  return (
    <Async promiseFn={loadPost}>
      <Async.Pending>
        <Spinner />
      </Async.Pending>
      <Async.Fulfilled>
        {(data) => <PostPage state={data.article} />}
      </Async.Fulfilled>
      <Async.Rejected>{(error) => <p>{error.message}</p>}</Async.Rejected>
    </Async>
  );
};
