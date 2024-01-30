import React from "react";
import { Blob11 } from "../icons/Blob11";
import { Blur } from "../components/Blur/Blur";
import "../styles/style.css";
import WalletTotal from "../components/WalletTotal";
import '../styles/styleguide.css';
import Line24 from '../assets/img/line-24.svg'
import WalletSearch from "../components/WalletSearch";
import WalletBreakdown from "../components/WalletBreakdown";
import MaskGroup from "../assets/img/mask-group.png"

function Wallet () {
  
  return (
  <div className="page-wrapper">
      <div className="blur-group">
        <Blur circleClassName="blur-instance" className="blur-5" />
        <Blur circleClassName="design-component-instance-node" className="blur-5-instance" />
      </div> 
        <div className="wallet-display-wrapper">
          <Blob11 className="blob" color="#A3F49D" />
            <WalletTotal />
          <img className="line" alt="Line" src={Line24} />
            <WalletSearch />
            <br></br>
            <WalletBreakdown />
        </div>
        <div className="settings-wrapper">
            <img className="mask-group" alt="Mask group" src={MaskGroup} />
            <div className="frame-25">
              <div className="heading">Wallet Name</div>
              <div className="heading-wrapper">
                <div className="heading-6">settings</div>
              </div>
            </div>
        </div>
   </div>
  );
};

export default Wallet;