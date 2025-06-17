import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AssetList from './components/AssetList';
import AddAsset from './components/AddAsset';
import EditAsset from './components/EditAsset';
import Dashboard from './components/Dashboard'; // Import the new Dashboard component
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} /> {/* Set Dashboard as the main page */}
        <Route path="/assets" element={<AssetList />} /> {/* Update path for AssetList */}
        <Route path="/add" element={<AddAsset />} />
        <Route path="/edit/:id" element={<EditAsset />} />
      </Routes>
    </Router>
  );
}

export default App;