import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { WrappedCryptoChart } from "./components/CryptoChart";
import { WrappedFearGreedIndexChart } from "./components/FearGreedIndexChart";
import { UserDataForm } from "./components/UserDataForm";
import { MailingListHeader } from "./components/MailingListHeader";
import { MailingListSubtext } from "./components/MailingListSubtext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PaymentForm } from "./components/StripePaymentForm";
import { PreferenceForm } from "./components/PreferenceForm";

function App() {
  return (
    <div className="app-container">
      <div className="mailing-list-form-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MailingListHeader />
                <MailingListSubtext />
                <div className="details-form-container">
                  <UserDataForm />
                </div>
              </>
            }
          />
          <Route
            path="/payments"
            element={
              <>
                <div className="payment-form-container">
                  <PaymentForm />
                </div>
              </>
            }
          />
          <Route
            path="/preferences"
            element={
              <>
                <MailingListHeader />
                <MailingListSubtext />
                <div className="preference-form-container">
                  <PreferenceForm />
                </div>
              </>
            }
          />
        </Routes>
        <p className="disclaimer">* - SMS Alerts require a payment.</p>
      </div>
      <div className="charts-container">
        <WrappedCryptoChart />
        <WrappedFearGreedIndexChart />
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
