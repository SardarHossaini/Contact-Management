import { useState } from 'react';
import './Contact.css';

const AddContact = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [photo, setPhoto] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [job, setJon] = useState();
  const [group, setGroup] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact={firstName,lastName,photo,phone,job,email,group}
    fetch("http://localhost:8000/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify(contact)
    }).then(() => {
      console.log("added");
    })
  }

  return (
    <>
      <div className="container">
        <div className="row form">
          <div className="col-md-6 col-12">
            <form onSubmit={handleSubmit}>
              <h1>Add New Contact</h1>
              <div className="form-group">
                <label for="first_name">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="last_name">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="photo">Photo</label>
                <input
                  type="file"
                  name="photo"
                  id="photo"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="job">Job</label>
                <input
                  type="text"
                  name="job"
                  id="job"
                  value={job}
                  onChange={(e) => setJon(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="group">Groups</label>
                <select
                  name="group"
                  id="group"
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                  className="form-control"
                >
                  <option value="">Select Group</option>
                  <option value="collagate">Collagate</option>
                  <option value="friends">Friends</option>
                  <option value="family">Family</option>
                  <option value="known">Known</option>
                  <option value="service">Service</option>
                </select>
              </div>
              <button type="submit" className="btn btn-secondary mt-4">
                Add
              </button>
              <button className="btn btn-outline-secondary mt-4 ms-2">
                cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddContact;
