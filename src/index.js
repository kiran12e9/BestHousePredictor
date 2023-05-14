import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Input from './Input';
import Plot from './Plot'
import reportWebVitals from './reportWebVitals';
import Header from './Header.js'
import Footer from './Footer.js'

import Body from './Body.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>

    <Body/>
    <Footer/>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
