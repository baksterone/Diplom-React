const initialeState = {
  user: {},
  posts: {},
  profile: "",
  hashTag: "",
  numberTab: 1,
  url: "https://conduit.productionready.io/api/articles?limit=10&offset=",
  slug: "",
  values: {
    title: "",
    about: "",
    text: "",
    tags: [],
    slug: "",
  },
};

const articles = (state = initialeState, action) => {
  switch (action.type) {
    case "TAGS":
      return { ...state, hashTag: action.tag };
    case "USER_POSTS":
      return { ...state, posts: { ...action.data } };
    case "URL":
      return { ...state, url: action.url };
    case "POST":
      return { ...state, slug: action.slug };
    case "NUMBER_TAB":
      return { ...state, numberTab: action.num };
    case "EDIT_ARTICLE":
      return { ...state, values: { ...action.values } };
    default:
      return state;
  }
};

export default articles;
