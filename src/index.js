import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './hoc/ScrollToTop';
import { Provider } from 'react-redux';
import store from './store/store';
import AuthProvider from './hoc/AuthProvider';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ScrollToTop />
      <AuthProvider>
        <ToastContainer position='top-center' autoClose={3000} theme='dark' />
        <App />
      </AuthProvider>
    </Provider>
  </BrowserRouter>,
);
