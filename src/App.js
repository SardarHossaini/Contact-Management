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

function App() {
  
  const { getdata, loading } = useFetch("http://localhost:8000/contacts");

  // console.log(contacts)
  
  return (
    <div className="app">
      <Navbar />
      <Contacts contacts={getdata} loading={loading} />
    </div>
  );
}

export default App;
