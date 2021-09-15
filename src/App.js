import { Home } from "./component/Home";
import { AddUser } from "./component/AddUser";
import { EditUser } from "./component/EditUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/adduser" component={AddUser} />
          <Route Path="/edituser" component={EditUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
