import { CURRENTLINE, ORANGE, PINK } from "../../helpers/colors";
import Spinner from "../Spinner";
import Contact from "./Contact";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Contact.css";

const Contacts = ({ contacts, loading }) => {
  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3">
                <Link to="/create">
                  <button
                    className="btn mx-2"
                    style={{ backgroundColor: PINK }}
                  >
                    Create New
                    <i className="fa fa-plus-circle mx-2"></i>
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <section className="container">
          <div className="boxies">
            {contacts.length > 0 ? (
              contacts.map((c) => <Contact key={c.id} contact={c} />)
            ) : (
              <div
                className="text-center py-5"
                style={{ backgroundColor: CURRENTLINE }}
              >
                <p className="h3" style={{ color: ORANGE }}>
                  Not Found Contact ...
                </p>
                <span style={{ fontSize: "60px", padding: "0px" }}>🚫</span>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Contacts;
