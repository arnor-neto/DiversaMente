import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";
import Landing from "./layout/Landing";
import Home from "./layout/Home";
import Level from "./layout/Level";
import Game from "./layout/Game";
import About from "./layout/About";
import Gallery from "./layout/Gallery";
import News from "./layout/News";

function App() {
  return (
    <Router>
      <Switch>
        <GlobalContext>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/level" component={Level} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/news" component={News} />
        </GlobalContext>
      </Switch>
    </Router>
  );
}

export default App;
