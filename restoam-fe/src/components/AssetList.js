import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
              </tr>
            </thead>
            <tbody>
              {assets.map(asset => (
                <tr key={asset.id}>
                  <td>{asset.name}</td>
                  <td>{asset.description}</td>
                  <td>{asset.location}</td>
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
