import SearchContact from "./contact/Searchcontact";
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-sm shadow-lg">
      <div className="container">
        <div className="row w-100">
          <div className="col">
            <i className="fa fa-id-badge"></i>
            <span style={{ color: "purple" }}>contact</span> management
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
