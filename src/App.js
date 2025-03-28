import { useState, useEffect } from "react";
import {
  AddContact,
  EditContact,
  ViewContact,
  Contacts,
  Contact,
  Navbar,
} from "./components";
import { useFetch } from "./useFetch";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const { getdata: contacts, loading } = useFetch("http://localhost:8000/contacts");
  const { getdata: groups, loading:loading2 } = useFetch(
    "http://localhost:8000/groups"
  );

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Contacts contacts={contacts} loading={loading} />
          </Route>
          <Route path="/create">
            <AddContact />
          </Route>
          <Route path="/edit">
            <EditContact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
