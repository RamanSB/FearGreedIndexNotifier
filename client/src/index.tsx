import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <div className="mailing-list-form-container">
        <h1 className="newsletter-header">Subscribe to our</h1>
        <br/>
        <h1 id="newsletter-header-fear-greed">Fear Greed <br/> Index</h1>
        <h1 className="newsletter-header">Mobile | Mailing List</h1>
        <div id="subtext-container">
          <p id="newsletter-subtext">
            Do you find yourself constantly checking the crypto markets? 
            Distracted due to the volatility? 
            Has it only been 5 minutes since you last checked your blockfolio...
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
            
            
          </form>
        </div>
      </div>
      <div style={{border: "2px dashed black"}}>
          
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
