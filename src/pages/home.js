import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="navigation">
      <nav>
        <a>HOME</a>
        <a>PROFILE</a>
        <a>EVENT</a>
        <a>OPTIONS</a>
        <a>DETAILS</a>
        <a>CONTACT</a>
      </nav>
      <div className="buttons">
        <button>WEBSITE</button>
        <button>GET CERTIFIED</button>
        <button>LOG IN</button>
      </div>
    </div>
  );
};

export default Home;

