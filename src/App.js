// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <h1>contact management</h1>
      <button className="btn btn-success">Button</button>
      <span className="fa fa-address-book"></span>
    </div>
  );
}

export default App;
