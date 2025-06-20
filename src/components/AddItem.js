import React, { useState } from 'react';

const AddItem = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    coverImage: '',
    additionalImages: []
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'coverImage') {
      setFormData({ ...formData, coverImage: URL.createObjectURL(files[0]) });
    } else if (name === 'additionalImages') {
      const images = Array.from(files).map(file => URL.createObjectURL(file));
      setFormData({ ...formData, additionalImages: images });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.push(formData);
    localStorage.setItem('items', JSON.stringify(items));
    setMessage('Item successfully added');
    setFormData({ name: '', type: '', description: '', coverImage: '', additionalImages: [] });
  };

  return (
    <div>
      <h2>Add New Item</h2>
      {message && <div className="alert alert-success">{message}</div>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input name="name" placeholder="Item Name" required className="form-control mb-2" onChange={handleChange} value={formData.name} />
        <input name="type" placeholder="Item Type" required className="form-control mb-2" onChange={handleChange} value={formData.type} />
        <textarea name="description" placeholder="Item Description" required className="form-control mb-2" onChange={handleChange} value={formData.description}></textarea>
        <input type="file" name="coverImage" accept="image/*" required className="form-control mb-2" onChange={handleChange} />
        <input type="file" name="additionalImages" accept="image/*" multiple className="form-control mb-2" onChange={handleChange} />
        <button type="submit" className="btn btn-primary">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;