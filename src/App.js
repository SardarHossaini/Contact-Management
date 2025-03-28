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
  const { getdata, loading } = useFetch("http://localhost:8000/contacts");

  // console.log(contacts)

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Contacts contacts={getdata} loading={loading} />
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
