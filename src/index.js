import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { DataProvider } from './DataContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="react-hook-form-final-form">
      <DataProvider>
        <App />
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
