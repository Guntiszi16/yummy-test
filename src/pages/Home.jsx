import React from "react";

import cake from "../assets/cake.avif";
import chicken from "../assets/chicken.avif";
import pizza from "../assets/pizza.webp";
import salad from "../assets/salad.avif";
import shrimp from "../assets/shrimp.avif";

import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="home_pic">
        <h1>Healthy Delicious Recipes</h1>
      </div>
      <div className="home_content">
        <h2>Popular food</h2>
        <p>
          We provide a variety of food and beverage recipes with height tast
          from famous chefs
        </p>
        <div className="round_pic_container">
          <img className="round_pic" src={cake} alt="cake" />
          <img className="round_pic" src={chicken} alt="chicken" />
          <img className="round_pic" src={pizza} alt="pizza" />
          <img className="round_pic" src={salad} alt="salad" />
          <img className="round_pic" src={shrimp} alt="shrimp" />
        </div>
      </div>
    </div>
  );
}
