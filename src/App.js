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
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/contacts")
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data!!!");
        }
        return res.json();
        })
      .then((data) => {
        setContacts(data);
        
      }).catch(err => {
        setError(err.message);
      })
    fetch("http://localhost:8000/groups")
      .then(res2 => {
        return res2.json();
      }).then(data2 => {
        setGroup(data2);
        setLoading(false);
      });
    },1000)
  }, []);
  console.log(getGroup);
  return (
    <div className="app">
      <Navbar />
      <Contacts contacts={getContacts} loading={loading} />
    </div>
  );
}

export default App;
