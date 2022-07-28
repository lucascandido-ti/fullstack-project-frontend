import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

// 👍 Bom ver o uso do `react-router-dom`, mesmo a aplicação tendo apenas uma rota
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      </Route>
    </Routes>
  </BrowserRouter>
);

