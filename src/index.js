import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyAVXGrKsqAP0pv9eD2z3pVCxMNLtjnS20A",
  authDomain: "italianooggi-b86ca.firebaseapp.com",
  projectId: "italianooggi-b86ca",
  storageBucket: "italianooggi-b86ca.appspot.com",
  messagingSenderId: "26497924787",
  appId: "1:26497924787:web:114ebc5aca1efd05a6bac6",
  measurementId: "G-EB9Y90NMXW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
