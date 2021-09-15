import { Home } from "./component/Home";
import { AddUser } from "./component/AddUser";
import { EditUser } from "./component/EditUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
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
