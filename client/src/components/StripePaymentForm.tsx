import "../assets/styles/forms.css";

export const PaymentForm = () => {
  return (
    <form className="payment-form">
      <div
        style={{
          display: "inline",
          padding: "8px 0 0px 0",
          border: "2px solid cornflowerblue",
          width: "8rem",
          marginLeft: "10%",
          borderRadius: "8px",
        }}
      >
        <i className="fa-solid  fa-credit-card card-icon"></i>
        <p
          style={{
            margin: "12px",
            textAlign: "left",
            color: "white",
            fontFamily: "DM Mono",
          }}
        >
          Card
        </p>
      </div>
      <div className="card-number-container">
        <label>Card number</label>
        <input
          className="card-number-input"
          placeholder="1234 1234 1234 1234"
          type="number"
        />
      </div>
      <div className="expiry-cvc-container">
        <div className="expiry-container">
          <label>Expiry</label>
          <input type="text" placeholder="MM / YY" />
        </div>
        <div className="cvc-container">
          <label>CVC</label>
          <input type="number" placeholder="CVC" />
        </div>
      </div>
      <div className="expiry-cvc-container">
        <div className="expiry-container">
          <label>Country</label>
          <input type="" />
        </div>
        <div className="cvc-container">
          <label>Postal Code</label>
          <input type="number" placeholder="WS11 1DB" />
        </div>
      </div>
    </form>
  );
};

{
  /* <form className="payment-form">
      <div
        style={{
          display: "inline",
          padding: "8px 0 0px 0",
          border: "2px solid cornflowerblue",
          width: "8rem",
          borderRadius: "8px",
        }}
      >
        <i className="fa-solid  fa-credit-card card-icon"></i>
        <p
          style={{
            margin: "12px",
            textAlign: "left",
            color: "white",
            fontFamily: "DM Mono",
          }}
        >
          Card
        </p>
      </div>
      <div style={{ marginTop: "8px" }}>
        <label
          style={{
            textAlign: "left",
            display: "block",
            fontFamily: "DM Mono",
            marginBottom: "2px",
          }}
        >
          Card number
        </label>
        <input
          className="card-number-input"
          placeholder="1234 1234 1234 1234"
          type="number"
        />
      </div>
      <div style={{ marginTop: "8px" }}></div>
      <div></div>
      <div></div>
      <div></div>
    </form> */
}
