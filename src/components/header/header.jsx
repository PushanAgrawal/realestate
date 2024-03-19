import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <section className="h-wrapper ">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="png" width={100} />
        <div className="h-menu flexCenter">
          <a href="">Resedencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
          <a href="">CONTACT</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
