import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import SignIn from "./Pages/Verification_pages/Sign_In";
import SignUp from "./Pages/Verification_pages/Sign_Up";
import Verification from "./Pages/Verification_pages/Verification";
import Congratulations from "./Pages/Verification_pages/Congratulations";
import FeedBody from "./Pages/Feed_pages/Main_feed";
import ProfileBody from "./Pages/Profile_pages/Profile";
import EditProfileBody from "./Pages/Profile_pages/Edit_Profile";
import store from "./Store/store.js";
import FindFriends from "./Pages/Find_Friends_Pages";
import { withAuth } from "./HOC/withAuth";
const token = localStorage.getItem("token");

store.dispatch({
  type: "TOKEN",
  payload: token,
});

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/signin" />
          </Route>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signup/success" component={Congratulations} />
          <Route exact path="/signup/verification" component={Verification} />
          <Route exact path="/feed" component={withAuth(FeedBody)} />
          <Route exact path="/profile" component={withAuth(ProfileBody)} />
          <Route
            exact
            path="/editprofile"
            component={withAuth(EditProfileBody)}
          />
          <Route exact path="/friends" component={withAuth(FindFriends)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
