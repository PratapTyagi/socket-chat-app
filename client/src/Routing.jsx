import {
  SignUp,
  SignIn,
  DefaultChat,
  Chat,
  Sidebar,
  AllUsers,
} from "./components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const Routing = () => {
  const currentUser = localStorage.getItem("currentUser");

  return (
    <>
      <Router>
        <Switch>
          {currentUser ? (
            <>
              <Sidebar />
              <Route exact path="/">
                <DefaultChat />
              </Route>

              <Route exact path="/room/:roomId">
                <Chat />
              </Route>

              <Route exact path="/room/:roomId/allusers">
                <AllUsers />
              </Route>
            </>
          ) : (
            <>
              <Route exact path="/" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={SignIn} />
            </>
          )}
        </Switch>
      </Router>
    </>
  );
};

export default Routing;
