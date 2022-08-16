import React from "react";
import "./profile.css";
import legends from "../assets/download.png";

function Profile() {
  return (
    <div className="name">
      <h1>Pradeep.N</h1>
      <input></input>
      <button>Submit</button>
      <div>
        <img src={legends} className="image" />
      </div>
    </div>
  );
}

export default Profile;
