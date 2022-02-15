import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
//  import browser router and wrap the app in the browser router as well
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* because the browser router envelopes the app component you can use links within the app
    so how you can have a header that never changes like google but you can click the link on the google header and go to the home page */}
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
