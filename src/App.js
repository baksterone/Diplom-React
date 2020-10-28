import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Header } from "./components/Header/Header";
import "./App.scss";
import Main from "./components/MainPage/Main";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUP/SignUp";
import { Settings } from "./components/Settings/Settings";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProfileService } from "./services/ProfileService";
import { PostPageService } from "./services/PostPageService";
import { AddPost } from "../src/components/AddPost/AddPost";
import SignInService from "../src/services/SignInService";

function App() {
  const user = useSelector((i) => i.authorize.user.username);

  useEffect(() => {
    if (localStorage.getItem("account") !== null) {
      let strArr = localStorage.getItem("account").split(" ");
      SignInService(strArr[0], strArr[1]);
    }
  }, [user]);

  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/profile/:user?" component={ProfileService} />
          <Route exact path="/post/:article?" component={PostPageService} />
          <Route exact path="/add-post" component={AddPost} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
