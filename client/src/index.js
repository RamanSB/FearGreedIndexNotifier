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
        <p id="newsletter-subtext">Do you find yourself constantly checking the crypto markets? Distracted due to the volatility? Has it only been 5 minutes since you last checked your blockfolio &#128514;</p>
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
