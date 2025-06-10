import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AssetList from './components/AssetList';
import AddAsset from './components/AddAsset';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AssetList />} />
        <Route path="/add" element={<AddAsset />} />
      </Routes>
    </Router>
  );
}

export default App;