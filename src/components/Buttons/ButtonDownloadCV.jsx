import React from "react";
import "./ButtonDownloadCV.css";

const ButtonDownloadCV = () => {
  return (
    <a 
      href="../../assets/cv/LIMCV.pdf"
      download="LIMCV.pdf" 
      className="download-btn"
    >
      Download CV
    </a>
  );
};

export default ButtonDownloadCV;
