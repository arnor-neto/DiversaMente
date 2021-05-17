import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";
import Landing from "./layout/Landing";
import Home from "./layout/Home";

function App() {
  return (
    <Router>
      <Switch>
        <GlobalContext>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
        </GlobalContext>
      </Switch>
    </Router>
  );
}

export default App;
