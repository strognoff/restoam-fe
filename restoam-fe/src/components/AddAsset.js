import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AddAsset() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/restoar/', formData)
      .then(response => {
        alert('Asset added successfully!');
        setFormData({ name: '', description: '', location: '' });
      })
      .catch(error => {
        console.error('Error adding asset:', error);
        alert('Failed to add asset.');
      });
  };

  return (
    <div className="container">
      <h1 className="display-4">Add Asset</h1>
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
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-secondary ml-2">Back to List</Link>
      </form>
    </div>
  );
}

export default AddAsset;
