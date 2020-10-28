import { store } from "..";
import { login } from "../redux/actions";

export const Registration = (user, email, pass) => {
  const url = "https://conduit.productionready.io/api/users";
  let post = { user: { email: email, password: pass, username: user } };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      store.dispatch(login(data.user));
    });
};
