import "./App.css";
import Homepage from "./pages/Homepage";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Available from "./pages/Available";
import Contact from "./pages/Contact"
import Portraiture from "./pages/Portraiture";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from "./components/Footer";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router basename = "/">
      <div className="App">
        <Route exact path = "/" component = {Homepage} />
        <Route exact path = "/gallery" component = {Gallery} />
        <Route exact path = "/about" component = {About} />
        <Route exact path = "/available" component = {Available} />
        <Route exact path = "/portraiture" component = {Portraiture} />
        <Route exact path = "/contact" component = {Contact} />
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
