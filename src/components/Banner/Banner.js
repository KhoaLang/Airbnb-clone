import React, { useContext } from "react";
import "./banner.scss";
const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-container container-md d-flex align-items-end">
        <div className="banner-quote">
          <h1>Olympian & Paralympian Online Experiences</h1>
          <button>Explore Now</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
