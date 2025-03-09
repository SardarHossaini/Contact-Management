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
            <div className="input-group mx-2 w-75" dir="ltr">
              <span
                className="input-group-text"
                id="basic-addon1"
                style={{ backgroundColor: "purple" }}
              >
                <i className="fa fa-search"></i>
              </span>
              <input
                type="text"
                dir="ltr"
                style={{ backgroundColor: "gray", borderColor: "purple" }}
                className="form-control"
                placeholder="search contact ..."
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
