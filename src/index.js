import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import createStore from './Store';
import AuthProvider from './Context/Auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={createStore()}>
        <App />
      </Provider >
    </AuthProvider>
  </React.StrictMode>
);

