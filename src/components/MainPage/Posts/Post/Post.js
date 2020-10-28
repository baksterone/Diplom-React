import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
import { Chip } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Like } from "../../../../services/Like";
import {
  profile,
  tags,
  userUrl,
  post,
  numberTab,
} from "../../../../redux/actions";

import "./Post.scss";

function Post({ data }) {
  const dispatch = useDispatch(),
    user = useSelector((i) => i.authorize.user.token),
    slug = data.slug,
    url = `https://conduit.productionready.io/api/articles/${slug}/favorite`,
    [like, setLike] = useState(data.favorited),
    profileUrl = `https://conduit.productionready.io/api/articles?author=${data.author.username}&limit=10&offset=`,
    [likeCount, setLikeCount] = useState(data.favoritesCount),
    history = useHistory();

  const handleClick = (i) => {
    dispatch(tags(i));
    dispatch(numberTab(2));
    dispatch(
      userUrl(
        `https://conduit.productionready.io/api/articles?tag=${i}&limit=10&offset=`
      )
    );
  };

  const createdDate = () => {
    const date = new Date(data.createdAt);
    return `${date.getDate()} ${date.toLocaleString("en", {
      month: "long",
    })} ${date.getFullYear()}`;
  };

  const onLike = () => {
    if (user) {
      let method;
      setLike((prev) => !prev);
      if (like) {
        method = "DELETE";
        setLikeCount((prev) => --prev);
      } else {
        method = "POST";
        setLikeCount((prev) => ++prev);
      }
      Like(url, method, user);
    } else {
      history.push("/signIn");
    }
  };

  const linkProfile = () => {
    dispatch(profile(data.author.username));
    dispatch(userUrl(profileUrl));
  };

  return (
    <div className="post">
      <div className="who-when">
        <img src={data.author.image} alt="avatar" />
        <div className="info">
          <Link to={`/profile/${data.author.username}`}>
            <p onClick={linkProfile}>{data.author.username}</p>
          </Link>
          <span className="when">{createdDate()}</span>
        </div>
        <button className="like-btn">
          <FavoriteIcon onClick={onLike} />
          {likeCount}
        </button>
      </div>
      <Link to={`/post/${slug}`}>
        <div className="about-post" onClick={() => dispatch(post(slug))}>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      </Link>
      <div className="more-buttons">
        <div className="post-tag">
          {data.tagList.map((tag, id) => (
            <Chip
              label={`#${tag}`}
              variant="outlined"
              key={id}
              onClick={() => handleClick(tag)}
            />
          ))}
        </div>
        <span>Read more...</span>
      </div>
    </div>
  );
}

export default Post;
