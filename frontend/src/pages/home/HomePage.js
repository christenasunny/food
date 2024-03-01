import React, { useEffect, useState } from 'react';
import Foods from '../../components/food/FoodComponent.js';
import axios from 'axios';
import './home.css'; 
import Top from '../../components/Topbar/top.js';
import Carousal from '../carousal/carousal.js';
import chef from '../../components/images/chef.jpg';
import Footer from '../footer/Footer.js';

export default function Home() {
  const [data, setData] = useState([]);
  const [foods, setFoods] = useState(data);
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    axios.get('https://online-food-website.onrender.com/getALLFoods')
      .then((res) => {
        setData(res.data);
        setFoods(res.data);
        setLoading(false)
      })
      .catch((err) => {
        console.log("Can't get food items to frontend", err);
      });
  }, []);

  const filter = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setFoods(data.filter(f => f.name.toLowerCase().includes(searchTerm)));
  };

  return (
    <div style={{marginTop:"80px"}}>
      <Top />
      {
      loading ?   <div class="spinner-border text-success"  role="status">
      <span class="sr-only">Loading...</span>
    </div> :
    <div>
    <div className="home-container">
      <h1 className="home-title">
        <i>Explore Delicious Foods</i>{" "}
        <img
          className="moving-image"
          src={chef}
          alt="Moving Image"
          style={{ height: "150px", marginLeft: "30px", marginBottom: "40px" }}
        />
      </h1>
      <div className="search-container">
        <input
          type="text"
          className="search-form-control"
          onChange={filter}
          placeholder="search"
        />
      </div>
      <div className="row justify-content-center">
        {foods.length === 0 ? (
          <p>No matching food items found.</p>
        ) : (
          foods.map((food) => (
            <div className="col-md-3 col-sm-6 col-lg-4 col-xl-3 mb-3" key={food._id}>
              <Foods food={food} />
            </div>
          ))
        )}
      </div>
      <div>
        <Carousal />
      </div>
    </div>
  </div>
      }
      <Footer />
    </div>
  
  );
}
