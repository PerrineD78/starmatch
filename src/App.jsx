import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AccueilPage from './Components/AccueilPage.jsx';

const App = () => {
  return (
    <div className="app">
      <AccueilPage />
    </div>
  );
};

export default App;

