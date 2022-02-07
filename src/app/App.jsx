import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { MainPage } from "../app/MainPage/MainPage";
import { SingleHeroPage } from "../app/SingleHeroPage/SingleHeroPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Fragment>
     
      <Switch>
        <Route exact path="/marvel-heroes-team/" component={MainPage} />
        <Route exact path="/marvel-heroes-team/characters/:id" component={SingleHeroPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
