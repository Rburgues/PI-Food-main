import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import store from "./Redux/store"
import axios from 'axios';


const REACT_APP_API = "https://food-h.herokuapp.com"


axios.defaults.baseURL = REACT_APP_API || "http://localhost:3001";

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
