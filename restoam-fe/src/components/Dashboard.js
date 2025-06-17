import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'; // Import required components
import axios from 'axios';
// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);


function Dashboard() {
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

  const calculateData = () => {
    const higherThan100 = assets.filter(asset => parseFloat(asset.cost) > 100).length;
    const lowerOrEqual100 = assets.length - higherThan100;

    return {
      labels: ['> 100 Pounds', '<= 100 Pounds'],
      datasets: [
        {
          data: [higherThan100, lowerOrEqual100],
          backgroundColor: ['#FF6384', '#36A2EB'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB'],
        },
      ],
    };
  };

  return (
    <div className="container">
      <h1 className="display-4">Dashboard</h1>
      <p className="lead">Overview of your assets.</p>
      <Link to="/assets" className="btn btn-primary mb-4">Go to Asset List</Link>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div>
          <h3>Asset Cost Distribution</h3>
          <Pie data={calculateData()} />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
