// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contact/Contacts.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Contacts />
    </div>
  );
}

export default App;
