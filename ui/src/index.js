import React from 'react';
import ReactDOM from 'react-dom/client';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import App from './App';
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<App />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </PrimeReactProvider>
  </React.StrictMode>
);