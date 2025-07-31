import React, { useState } from 'react';
import './FurnitureForm.css';
import axios from 'axios';

const FurnitureForm = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    description: '',
    dimensions: '',
    color: '',
    image: null,
    roomImage: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const resetForm = () => {
    setFormData({
      itemName: '',
      description: '',
      dimensions: '',
      color: '',
      image: null,
      roomImage: null
    });
    // Reset file inputs
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => input.value = '');
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData();
    form.append("itemName", formData.itemName);
    form.append("description", formData.description);
    form.append("dimensions", formData.dimensions);
    form.append("color", formData.color);
    form.append("furnitureImage", formData.image);
    form.append("roomImage", formData.roomImage);

    try {
      const res = await axios.post("http://localhost:5000/api/items/submit", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      console.log(res.data);
      alert("Item submitted successfully!");
      resetForm(); // Clear the form after successful submission
      
    } catch (err) {
      console.error(err);
      
      // Better error handling
      const errorMessage = err.response?.data?.message || err.message || "Failed to submit item";
      alert(`Error: ${errorMessage}`);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="furniture-form-container">
      <h2 className="heading">
        <span className="plain-white">Submit </span> 
        <span className="head">Your Furniture </span>  
        <span className="plain-white">or Decor </span> 
        <span className="head">Item</span> 
      </h2>
      
      <form className="furniture-form" onSubmit={handleSubmit}>
        <label>Item Name</label>
        <input
          type="text"
          name="itemName"
          value={formData.itemName}
          onChange={handleChange}
          required
          placeholder="e.g., Sofa, Wall Art"
          disabled={isSubmitting}
        />

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Material, purpose, age, etc."
          rows={3}
          disabled={isSubmitting}
        />

        <label>Dimensions (L x W x H in cm)</label>
        <input
          type="text"
          name="dimensions"
          value={formData.dimensions}
          onChange={handleChange}
          placeholder="e.g., 180 x 80 x 75"
          disabled={isSubmitting}
        />

        <label>Color</label>
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
          placeholder="e.g., Grey, Beige"
          disabled={isSubmitting}
        />

        <label>Upload Furniture Item Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />

        <label>Upload Room Image</label>
        <input
          type="file"
          name="roomImage"
          accept="image/*"
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default FurnitureForm;