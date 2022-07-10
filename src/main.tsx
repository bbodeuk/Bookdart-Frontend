import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Dialog from './components/Dialog';

import './css/reset.css';
import './css/icons.css';

async function main() {
  if (import.meta.env.DEV) {
    const { default: worker } = await import('./mocks/browser');

    worker.start();
  }

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
      <Dialog />
    </React.StrictMode>,
  );
}

main();
