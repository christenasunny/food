import React, { useEffect, useState } from 'react';
import Foods from '../../components/food/FoodComponent.js';
import axios from 'axios';
import './home.css'; 
import Top from '../../components/Topbar/top.js';
import Carousal from '../carousal/carousal.js';
import Contact from '../../components/contact/contact.js';
import chef from '../../components/images/chef.jpg'

export default function Home() {
  const [data, setData] = useState([]);
  const [foods, setFoods] = useState(data);

  useEffect(() => {
    axios.get('http://localhost:3001/getALLFoods')
      .then((res) => {
        setData(res.data);
        setFoods(res.data);
      })
      .catch((err) => {
        console.log("Can't get food items to frontend", err);
      });
  }, []);

  const filter = (e) => {
    setFoods(data.filter(f => f.name.toLowerCase().includes(e.target.value)))
  }

  return (
    <div>
      <Top />
      <div className="home-container">
        <h1 className="home-title"><i>Explore Delicious Foods</i> <img className="moving-image" src={chef} alt="Moving Image" style={{height:'150px',marginLeft:'30px',marginBottom:'40px'}}/></h1>
        <div className="search-container">
          <input type="text" className='form-control' onChange={filter} placeholder='search' />
        </div>
        <div className="row justify-content-center">
          {foods.length === 0 ? (
            <p>No matching food items found.</p>
          ) : (
            foods.map((food) => (
              <div className="col-md-3 mb-3" key={food._id}>
                <Foods food={food} />
              </div>
            ))
          )}
        </div>
        <div>
        <Carousal/>
        </div>
       
      </div>
    </div>
  );
}
