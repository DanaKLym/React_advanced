import React from 'react';
import ReactDOM from 'react-dom/client';
import { ComponentProvider } from './ComponentContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ComponentProvider>
      <App />
    </ComponentProvider>
  </React.StrictMode>
);
