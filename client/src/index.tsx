import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { WrappedCryptoChart } from './components/CryptoChart';
import { WrappedFearGreedIndexChart } from './components/FearGreedIndexChart';
import { UserDataForm } from './components/UserDataForm';
import { MailingListHeader } from './components/MailingListHeader';
import { MailingListSubtext } from './components/MailingListSubtext';


function App() {

  

  return (
    <div className="app-container">
      <div className="mailing-list-form-container">
        <MailingListHeader/>
        <MailingListSubtext/>
        <div className="details-form-container">
          <UserDataForm/>
        </div>
        <p className="disclaimer">* - SMS Alerts require a payment. (Leave phone field blank for email-only alerts)</p>
      </div>

      <div className="charts-container">
          <WrappedCryptoChart/>
          <WrappedFearGreedIndexChart/>
      </div>
    </div>
  );
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
