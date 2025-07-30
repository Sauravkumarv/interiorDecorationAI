import React, { useState } from 'react';
import './FurnitureForm.css';


const FurnitureForm = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    description: '',
    dimensions: '',
    color: '',
    image: null,
    roomImage: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted! (You can now send this to backend for AI placement)");
    // send formData to backend using fetch or axios
  };

  return (
    <div className="furniture-form-container">
     <h2 class="heading">
  <span class="plain-white">Submit </span> 
  <span class="head">Your Furniture </span>  
  <span class="plain-white">or Decor </span> 
  <span class="head">Item</span> 
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
        />

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Material, purpose, age, etc."
          rows={3}
        />

        <label>Dimensions (L x W x H in cm)</label>
        <input
          type="text"
          name="dimensions"
          value={formData.dimensions}
          onChange={handleChange}
          placeholder="e.g., 180 x 80 x 75"
        />

        <label>Color</label>
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
          placeholder="e.g., Grey, Beige"
        />

        <label>Upload Furniture Item Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />

        <label>Upload Room Image</label>
        <input
          type="file"
          name="roomImage"
          accept="image/*"
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FurnitureForm;
