// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import {
  AddContact,
  EditContact,
  ViewContact,
  Contacts,
  Contact,
  Navbar,
} from "./components";

function App() {
  const [loading, setLoading] = useState(false);
  const [getContacts, setContacts] = useState([]);
  return (
    <div className="app">
      <Navbar />
      <Contacts contacts={getContacts} loading={loading} />
    </div>
  );
}

export default App;
