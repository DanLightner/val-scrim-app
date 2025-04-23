import React from 'react';
import "./Navbar.css";
import notiBell from "../assets/noti-bell.png"; // Import the notification bell image
import crosshair from "../assets/tiny-cross.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={crosshair} alt="Logo" className="logo" />
        <span className="app-name">Valorant Scrim</span>
      </div>

      <div className="nav-center">
        <a href="#">Home</a>
        <a href="#">Post Scrim</a>
        <a href="#">My Team</a>
        <a href="#">Settings</a>
      </div>

      <div className="nav-right">
        <img src={notiBell} alt="Notifications" className="bell-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
