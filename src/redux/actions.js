export const profile = (user) => {
  return {
    type: "PROFILE",
    user,
  };
};

export const user = (user) => {
  return {
    type: "USER",
    user,
  };
};

export const login = (data) => {
  return {
    type: "LOGIN",
    data,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const post = (slug) => {
  return {
    type: "POST",
    slug,
  };
};

export const editArticle = (values) => {
  return {
    type: "EDIT_ARTICLE",
    values
  }
}

export const userPosts = (data) => {
  return (dispatch) => {
    dispatch({ type: "USER_POSTS", data });
  };
};

export const tags = (tag) => {
  return {
    type: "TAGS",
    tag,
  };
};

export const userUrl = (url) => {
  return {
    type: "URL",
    url,
  };
};

export const numberTab = (num) => {
  return {
    type: "NUMBER_TAB",
    num,
  };
};
