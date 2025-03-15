import React from "react";
import "./Header.css";
import ButtonDownloadCV from "../Buttons/ButtonDownloadCV";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Yoyodevc</h1>
      </div>
      <div className="resume-button">
        <ButtonDownloadCV />
      </div>
    </header>
  );
};

export default Header;
