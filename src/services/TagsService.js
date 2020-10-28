import React from "react";
import Async from "react-async";
import Spinner from "../components/spinner";
import { Tag } from "../components/MainPage/Tags/Tag/Tag";

const getTags = async () => {
  return await fetch("https://conduit.productionready.io/api/tags")
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());
};

const TagsService = () => (
  <Async promiseFn={getTags}>
    <Async.Loading>
      <Spinner />
    </Async.Loading>

    <Async.Resolved>
      {(data) => (
        <section className="all-tags">
          {data.tags.map((elem, index) => (
            <Tag key={index} data={elem} />
          ))}
        </section>
      )}
    </Async.Resolved>

    <Async.Rejected>
      {(error) => `Something went wrong: ${error.message}`}
    </Async.Rejected>
  </Async>
);

export default TagsService;
