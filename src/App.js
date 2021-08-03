import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/SigninPage";
import React,{useState} from "react";


function App() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/SmootScrollPage">
            <Home toggle={toggle} isOpen={isOpen}/>
          </Route>
          <Route exact path="/SmootScrollPage/signin" component={SigninPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
