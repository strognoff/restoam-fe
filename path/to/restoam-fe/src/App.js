import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';

function App() {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your API endpoint
    axios.get('https://api.example.com/assets')
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="images/gear.png" width="30" height="30" className="d-inline-block align-top" alt="" />
          RestoAM: Asset
        </a>
      </nav>
      <div className="main_asset">
        <div className="jumbotron">
          <h1 className="display-4">Asset</h1>
          <p className="lead">This is a simple Asset list screen, please select your asset at the table below for more details.</p>
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
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
                  <td>{asset.assetCode}</td>
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

export default App;
