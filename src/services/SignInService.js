import { store } from "..";
import { login } from "../redux/actions";

const SignInService = (email, pass) => {
  const url = "https://conduit.productionready.io/api/users/login";
  let post = { user: { email: email, password: pass } };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return store.dispatch(login(data.user));
    });
};

export default SignInService;
