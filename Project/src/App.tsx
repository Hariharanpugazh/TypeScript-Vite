import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Page1 from './pages/Page1';
import HomePage from './pages/HomePage';
import Dashboard from './pages/DashBoard';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path ="/" element= {<LandingPage />} />
      <Route path ="/buttons" element={<Page1 />} />
      <Route path ="/page1" element={<HomePage />} />
      <Route path ="/page2" element={<LoginPage />} />
      <Route path ="/page3" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
