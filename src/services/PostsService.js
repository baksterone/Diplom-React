import Pagination from "@material-ui/lab/Pagination";
import React, { useState } from "react";
import { Async } from "react-async";
import Post from "../components/MainPage/Posts/Post/Post";
import Spinner from "../components/spinner";
import { useSelector } from "react-redux";

const PostsService = () => {
  const token = useSelector((i) => i.authorize.user.token);
  const header = () => {
    if (token) {
      return {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json; charset=utf-8",
      };
    }
    return {
      "Content-Type": "application/json; charset=utf-8",
    };
  };
  const [page, setPage] = useState(0);
  const url = useSelector((i) => i.articles.url);
  const loadPosts = () =>
    fetch(`${url}${page}`, {
      headers: header(),
    })
      .then((res) => (res.ok ? res : Promise.reject(res)))
      .then((res) => res.json());
  return (
    <Async promiseFn={loadPosts}>
      <Async.Pending>
        <Spinner />
      </Async.Pending>
      <Async.Fulfilled>
      {(data) => {
          if (data.articlesCount !== 0) {
            return (
              <>
                {data.articles.map((i, ind) => {
                  return <Post data={i} key={ind} />;
                })}
                <Pagination
                  count={Math.ceil(data.articlesCount / 10)}
                  shape="rounded"
                  page={page}
                  onChange={(e, value) => setPage(value)}
                />
              </>
            );
          }
          return <h3>Articles not yet...</h3>;
        }}
      </Async.Fulfilled>
      <Async.Rejected>{(error) => <p>{error.message}</p>}</Async.Rejected>
    </Async>
  );
};

export default PostsService;
