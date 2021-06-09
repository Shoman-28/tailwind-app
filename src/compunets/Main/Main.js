import React from "react";
import ImageOne from "../images/egg.jpg";
import ImageTwo from "../images/egg-2.jpeg";
const Main = () => {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Vegetable Muffins</h2>
          <p className="mb-2">Cripsy, delicious, and nutritious</p>
          <span>$30</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} alt="" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Cucumbers Salad</h2>
          <p className="mb-2">Cripsy, delicious, and nutritious</p>
          <span>$20</span>
        </div>
      </div>
    </>
  );
};

export default Main;
