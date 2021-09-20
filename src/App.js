import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Available from "./pages/Available";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Route exact path = "/" component = {Homepage } />
        <Route exact path = "/gallery" component = {Gallery} />
        <Route exact path = "/about" component = {About} />
        <Route exact path = "/available" component = {Available} />
        <p>Created by Clare Henderson using React JS</p>
        <p>2021</p>
      </div>
    </Router>
  );
}

export default App;
