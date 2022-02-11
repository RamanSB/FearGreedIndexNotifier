import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { WrappedCryptoChart } from './components/CryptoChart';
import { WrappedFearGreedIndexChart } from './components/FearGreedIndexChart';


function App() {

  function handleFormSubmit(event: React.SyntheticEvent) {
      event.preventDefault();
      console.log(`Subscribe button clicked.`);
  }

  return (
    <div className="app-container">
      <div className="mailing-list-form-container">
        <h1 className="newsletter-header">Subscribe to our</h1>
        <br/>
        <div className="newsletter-header-container">
          <h1 id="newsletter-header-fear-greed">Fear Greed <br/> Index</h1>
          <img width={280} height={280} src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index"></img>
        </div>
        <h1 className="newsletter-header">SMS | Mailing List</h1>
        <div id="subtext-container">
          <p id="newsletter-subtext">
            Do you find yourself constantly checking the crypto markets? 
            Distracted due to the volatility? 
            Has it only been 5 minutes since you last checked your blockfolio.
            </p>
        </div>
        <div className="details-form-container">
          <form id="details-form">
            <div className="form-element-wrapper">
              <div className="label-wrapper"><label htmlFor="email-field"><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></label></div>
              <input id="email-field" className="input-form-fields" type="email" placeholder="investor@blockchain.com"/>
            </div>
            <div className="form-element-wrapper">
              <div className="label-wrapper"><label htmlFor="phone-field"><i className="fa fa-mobile fa-2x"></i></label></div>
              <input id="phone-field" className="input-form-fields" type="phone" placeholder="+44 7939323933"/>
            </div>
            <div className="submit-btn-container">
              <button className="submit-btn" onSubmit={handleFormSubmit}>Click To Subscribe</button>
            </div>
          </form>
        </div>
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
