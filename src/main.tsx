import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import worker from './mocks/browser';
import './css/reset.css';

if (import.meta.env.DEV) {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
