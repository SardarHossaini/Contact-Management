// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Contacts from "./components/contact/Contacts.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [getContacts, setContacts] = useState([]);
  return (
    <div className="app">
      <Navbar />
      <Contacts contacts={getContacts} />
    </div>
  );
}

export default App;
