import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { initializeApp } from "firebase/app";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const firebaseConfig = {
  apiKey: "AIzaSyAaSYgIzdNwn83M1ChkKwC57Lm_AV8xo0o",
  authDomain: "ecommerce-96f56.firebaseapp.com",
  projectId: "ecommerce-96f56",
  storageBucket: "ecommerce-96f56.appspot.com",
  messagingSenderId: "603277921722",
  appId: "1:603277921722:web:33d5000761d1e17c6ca183"
};


initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <App />
</React.StrictMode>
)
