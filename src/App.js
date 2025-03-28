import { useState, useEffect } from "react";
import {
  AddContact,
  EditContact,
  ViewContact,
  Contacts,
  Contact,
  Navbar,
} from "./components";

function App() {
  const [loading, setLoading] = useState(true);
  const [getContacts, setContacts] = useState([]);
  const [getGroup, setGroup] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/contacts")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setContacts(data);
          setLoading(false);
        });
    },1000)
  }, []);
  return (
    <div className="app">
      <Navbar />
      <Contacts contacts={getContacts} loading={loading} />
    </div>
  );
}

export default App;
