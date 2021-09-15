import { Home } from "./component/Home";
import { AddUser } from "./component/AddUser";
import { EditUser } from "./component/EditUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Home />
          <AddUser />
          <EditUser />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
