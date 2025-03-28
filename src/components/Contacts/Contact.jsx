import { CURRENTLINE, CYAN, ORANGE, PURPLE, RED } from "../../helpers/colors";
import "./Contact.css";

const Contact = ({ contact }) => {
  return (
    <>
      <div className="cart my-2" style={{ backgroundColor: CURRENTLINE }}>
        <div className="cart-body">
          <div className="">
            <img
              src={contact.photo}
              alt={contact.full_name}
              style={{
                border: `1px solid ${PURPLE}`,
              }}
              className="rounded cart-img"
            />
          </div>
          <div className="list-info">
            <ul className="list-group">
              <li className="list-group-item list-group-item-dark">
                First Name: <span className="fw-bold">{contact.first_name}</span>
              </li>
              <li className="list-group-item list-group-item-dark">
                Phone: <span className="fw-bold">{contact.phone}</span>
              </li>
              <li className="list-group-item list-group-item-dark">
                Email: <span className="fw-bold">{contact.job}</span>
              </li>
            </ul>
          </div>
          <div className="actions">
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
    </>
  );
};

export default Contact;
