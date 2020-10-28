const initialeState = {
  user: {},
  url: "https://conduit.productionready.io/api/articles?limit=10&offset=",
};

const profile = (state = initialeState, action) => {
  switch (action.type) {
    case "PROFILE":
      return { ...state, profile: action.user };
    default:
      return state;
  }
};

export default profile;
