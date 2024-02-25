import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './addfood.css'

export default function AddFoods() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState('');

  const navigate= useNavigate()
  
  const addfoodhandle = async (e) => {
    e.preventDefault();
    if (isNaN(price) ) {
      alert("Please enter a valid price");
      return;
  }
  const uppercaseName = name.toUpperCase();
    const formdata = new FormData();
    formdata.append('file', file);
    formdata.append('name', uppercaseName);
    formdata.append('category', category);
    formdata.append('description', description);
    formdata.append('price', price);

    try {
      const result = await axios.post('http://localhost:3001/AddFoodRouter', formdata);
      alert(result.data.message);
      navigate('/')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="addfood-container">
      <div className="addfood-form">
      <h2 className="addfood-title">Add Food</h2>

            <form onSubmit={addfoodhandle}>

              <input required type="text"placeholder="Food Name"className="form-control"value={name}onChange={(e) => setName(e.target.value)}/>

              <input requiredtype="text"placeholder="Category"className="form-control"value={category}onChange={(e) => setCategory(e.target.value)}/>

              <input required type="text"placeholder="Description"className="form-control"value={description} onChange={(e) => setDescription(e.target.value)} />

              <input requiredtype="text"placeholder="Price"className="form-control"value={price} onChange={(e) => setPrice(e.target.value)}/>
              <br />
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />

              <button type="submit" className='btn addfood-btn'>
                Add
              </button>
            </form>
          </div>
        </div>
  );
}
