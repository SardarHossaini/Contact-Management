import { CURRENTLINE, CYAN, ORANGE, PURPLE, RED } from "../../helpers/colors";

const Contact = ({contact}) => {
  return (
    <div className="col-md-6 col-6">
      <div className="card my-2" style={{ backgroundColor: CURRENTLINE }}>
        <div className="card-body">
          <div className="row align-items-center d-flex justify-content-around">
            <div className="col-md-4 col-sm-4">
              <img
                src={contact.photo}
                alt={contact.full_name}
                style={{
                  border: `1px solid ${PURPLE}`,
                  height: "200px",
                }}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-7 col-sm-7">
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark">
                  Full Name: <span className="fw-bold">{ contact.full_name }</span>
                </li>
                <li className="list-group-item list-group-item-dark">
                  Phone: <span className="fw-bold">{ contact.phone }</span>
                </li>
                <li className="list-group-item list-group-item-dark">
                  Email:{" "}
                  <span className="fw-bold">{ contact.email }</span>
                </li>
              </ul>
            </div>
            <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
              <button className="btn my-1" style={{ backgroundColor: ORANGE }}>
                <i className="fa fa-eye"></i>
              </button>
              <button className="btn my-1" style={{ backgroundColor: CYAN }}>
                <i className="fa fa-pen"></i>
              </button>
              <button className="btn my-1" style={{ backgroundColor: RED }}>
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
