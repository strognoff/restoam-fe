import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditAsset() {
  const { id } = useParams(); // Get the asset ID from the URL
  const navigate = useNavigate(); // For navigation after editing
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    cost: '0',
  });

  useEffect(() => {
    // Fetch the asset details to populate the form
    axios.get(`http://localhost:8080/restoam/${id}`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error fetching asset details:', error);
        alert('Failed to fetch asset details.');
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/restoam/`, { ...formData, id })
      .then(() => {
        alert('Asset updated successfully!');
        navigate('/'); // Redirect to the asset list
      })
      .catch(error => {
        console.error('Error updating asset:', error);
        alert('Failed to update asset.');
      });
  };

  return (
    <div className="container">
      <h1 className="display-4">Edit Asset</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Asset</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cost">Cost</label>
          <input
            type="number"
            className="form-control"
            id="cost"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
        <button type="button" className="btn btn-secondary ml-2" onClick={() => navigate('/')}>Cancel</button>
      </form>
    </div>
  );
}

export default EditAsset;
