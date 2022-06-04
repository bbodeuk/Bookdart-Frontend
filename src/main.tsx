import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import './css/reset.css';

async function main() {
  if (import.meta.env.DEV) {
    const { default: worker } = await import('./mocks/browser');

    worker.start();
  }

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

main();
