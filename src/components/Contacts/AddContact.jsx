import './Contact.css';

const AddContact = () => {
  return (
    <>
      <div className="container">
        <div className="row form">
          <div className="col-md-6 col-12">
            <form>
              <h1>Add New Contact</h1>
              <div className="form-group">
                <label for="first_name">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="last_name">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="photo">Photo</label>
                <input
                  type="file"
                  name="photo"
                  id="photo"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="phone">Phone</label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="job">Job</label>
                <input
                  type="text"
                  name="job"
                  id="job"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="group">First Name</label>
                <select name="group" id="group" className="form-control">
                  <option value="">Select Group</option>
                  <option value="collagate">Collagate</option>
                  <option value="friends">Friends</option>
                  <option value="family">Family</option>
                  <option value="known">Known</option>
                  <option value="service">Service</option>
                </select>
              </div>
              <button type="submit" className='btn btn-secondary mt-4'>Add</button>
              <button className='btn btn-outline-secondary mt-4 ms-2'>cancel</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddContact;
