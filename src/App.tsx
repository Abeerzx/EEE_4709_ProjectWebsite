import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import Dataset from './pages/Dataset';
import Methodology from './pages/Methodology';
import Results from './pages/Results';
import ModelInAction from './pages/ModelInAction';
import Scalability from './pages/Scalability';
import FutureImprovements from './pages/FutureImprovements';

function App() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="dataset" element={<Dataset />} />
          <Route path="methodology" element={<Methodology />} />
          <Route path="results" element={<Results />} />
          <Route path="model-in-action" element={<ModelInAction />} />
          <Route path="scalability" element={<Scalability />} />
          <Route path="future-improvements" element={<FutureImprovements />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;