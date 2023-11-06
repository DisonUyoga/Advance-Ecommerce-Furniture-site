import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider} from 'react-redux'
import "remixicon/fonts/remixicon.css";
import 'bootstrap/dist/css/bootstrap.css'
import store from './redux/store.js'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

axios.defaults.baseURL="https://obudhodison.pythonanywhere.com/"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ToastContainer
    position="top-right"
    autoClose={3000}
    closeOnClick
    pauseOnHover
    theme="dark"
    >

    </ToastContainer>
    <App />
    </Provider>
  
  
    
  </React.StrictMode>,
)
