import { SubscribeButton } from "./SubscribeButton";
import React from "react";

export const UserDataForm = () => {
    
    let [email, setEmail] = React.useState("");
    let [phoneNumber, setPhoneNumber] = React.useState("");

    return (
      <form id="details-form">
        <div className="form-element-wrapper">
          <div className="label-wrapper">
            <label htmlFor="email-field">
              <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
            </label>
          </div>
          <input
            id="email-field"
            className="input-form-fields"
            type="email"
            placeholder="investor@blockchain.com"
            onChange={e => setEmail(e.target.value.trim())}
          />
        </div>
        <div className="form-element-wrapper">
          <div className="label-wrapper">
            <label htmlFor="phone-field">
              <i className="fa fa-mobile fa-2x"></i>
            </label>
          </div>
          <input
            id="phone-field"
            className="input-form-fields"
            type="phone"
            placeholder="+44 7964 583 121"
            onChange={e => setPhoneNumber(e.target.value.trim())}
          />
        </div>
        <SubscribeButton email={email} phone={phoneNumber}>Click To Subscribe</SubscribeButton>
      </form>
    );
}

