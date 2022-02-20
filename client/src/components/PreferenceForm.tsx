import { Link } from "react-router-dom";
import "../assets/styles/forms.css";

export const PreferenceForm = () => {
  return (
    <form className="preference-form">
      <div className="header-row">
        <Link to={"/"}>
          <i className="fa-solid fa-arrow-left navigation-arrow"></i>
        </Link>
        <h4>Alert Preferences</h4>
        <Link to={"/payments"}>
          <i className="fa-solid fa-arrow-right navigation-arrow"></i>
        </Link>
      </div>
      <div className="form-element-wrapper">
        <label className="checkbox" htmlFor="mail-alert-checkbox">
          <span>Mail Alerts</span>
          <input
            id="mail-alert-checkbox"
            type="checkbox"
            onChange={() => {
              console.log(`Mail alert checkbox selected`);
            }}
          />
        </label>
      </div>
      <div className="form-element-wrapper">
        <label className="checkbox" htmlFor="sms-alert-checkbox">
          <span>SMS Alerts</span>
          <input
            id="sms-alert-checkbox"
            type="checkbox"
            onChange={() => {
              console.log(`SMS alert checkbox selected`);
            }}
          />
        </label>
      </div>
    </form>
  );
};
