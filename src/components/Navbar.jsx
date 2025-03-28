import SearchContact from "./Contacts/SearchContact";
import { PURPLE, BACKGROUND } from "../helpers/colors";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-sm shadow-lg"
      style={{ backgroundColor: BACKGROUND }}
    >
      <div className="container">
        <div className="row w-100">
          <div className="col">
            <div className="navbar-brand">
              <Link to="/" className="link">
                <i className="fa fa-id-badge" style={{ color: PURPLE }}></i>
                {"  "}
                <span style={{ color: PURPLE }}>contact</span> management
              </Link>
            </div>
          </div>
          <div className="col">
            <SearchContact />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
