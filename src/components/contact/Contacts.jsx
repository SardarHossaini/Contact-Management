import { CURRENTLINE, ORANGE, PINK } from "../../helpers/colors";
import Contact from "./Contact";

const Contacts = ({ contacts }) => {
  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3">
                <button className="btn mx-2" style={{ backgroundColor: PINK }}>
                  Create New
                  <i className="fa fa-plus-circle mx-2"></i>
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          {contacts.length > 0 ? (
            contacts.map((c) => <Contact key={c.id} contacts={c} />)
          ) : (
            <div
              className="text-center py-5"
              style={{ backgroundColor: CURRENTLINE }}
            >
              <p className="h3" style={{ color: ORANGE }}>
                Not Found Contact ...
              </p>
                <span style={{ fontSize: "60px", padding: "0px" }}>🚫</span>
                {/* <img src={require("../../helpers/basir.JPG")} alt="" /> */}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Contacts;
