import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AssetList() {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/restoam/assets/all')
      .then(response => {
        setAssets(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching assets:', error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/restoam/${id}`)
      .then(() => {
        alert('Asset deleted successfully!');
        setAssets(assets.filter(asset => asset.id !== id));
      })
      .catch(error => {
        console.error('Error deleting asset:', error);
        alert('Failed to delete asset.');
      });
  };

  return (
    <div>
      <div className="main_asset">
        <div className="jumbotron">
          <h1 className="display-4">Asset</h1>
          <p className="lead">This is a simple Asset list screen, please select your asset at the table below for more details.</p>
          <Link to="/add" className="btn btn-primary btn-lg" role="button">Add Asset</Link>
        </div>
      </div>
      <div className="container">
        {loading ? (
          <p>Loading assets...</p>
        ) : (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Asset</th>
                <th>Description</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {assets.map(asset => (
                <tr key={asset.id}>
                  <td>{asset.name}</td>
                  <td>{asset.description}</td>
                  <td>{asset.location}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(asset.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AssetList;