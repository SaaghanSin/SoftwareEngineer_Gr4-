import React from "react";
import "./loadingWin.css";
import Loading from "../loading/Loading";
const LoadingWin = ({ handleClose }) => {
  return (
    <div className="loading-win-container">
      <div className="loading-win-content">
        <Loading />
      </div>
    </div>
  );
};

export default LoadingWin;
