const initialeState = {
  user: {},
  url: "https://conduit.productionready.io/api/articles?limit=10&offset=",
};

const authorize = (state = initialeState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.data };
    case "LOGOUT":
      return { ...state, user: {} };
    default:
      return state;
  }
};

export default authorize;
