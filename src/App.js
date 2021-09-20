import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Available from "./pages/Available";
import Contact from "./pages/Contact"
import { HashRouter as Router, Route } from "react-router-dom";
import Portraiture from "./pages/Portraiture";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Route exact path = "/" component = {Homepage } />
        <Route exact path = "/gallery" component = {Gallery} />
        <Route exact path = "/about" component = {About} />
        <Route exact path = "/available" component = {Available} />
        <Route exact path = "/portraiture" component = {Portraiture} />
        <Route exact path = "/contact" component = {Contact} />
        <p>Created by Clare Henderson using React JS</p>
        <p>2021</p>
      </div>
    </Router>
  );
}

export default App;
