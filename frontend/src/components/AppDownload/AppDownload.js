import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';
const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For better Experience Download
        <br /> Tomato App
      </p>
      <div className="app-download-platforms">
        <img alt="" src={assets.play_store} />
        <img alt="" src={assets.app_store} />
      </div>
    </div>
  );
};

export default AppDownload;
