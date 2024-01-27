import React from "react";
import { Algo } from "../components/Algo";
import { AlgoWrapper } from "../components/Algo/Algowrapper";
import { ArchiveFiles } from "../icons/ArchiveFiles";
import { Blob11 } from "../icons/Blob11";
import { Blur } from "../components/Blur/Blur";
import { Btc } from "../icons/Btc/Btc";
import { BtcWrapper } from "../components/BtcWrapper/BtcWrapper";
import { Button } from "../components/Button/Button";
import { ChevronRight } from "../icons/ChevronRight";
import { ClipboardAdd1 } from "../icons/ClipboardAdd1";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { ExpandArrows } from "../icons/ExpandArrows";
import { File } from "../icons/File";
import { IconComponentNode } from "../components/IconComponentNode/IconComponentNode";
import { ImageWandMagicRightStars1 } from "../icons/ImageWandMagicRightStars1";
import { Link } from "../icons/Link";
import { LinkWrapper } from "../components/LinkWrapper/LinkWrapper";
import { MagnifyingGlass1 } from "../icons/MagnifyingGlass1";
import { Music } from "../icons/Music";
import { PhoneDialAlt } from "../icons/PhoneDialAlt";
import { Refresh2 } from "../icons/Refresh2";
import { Usdc } from "../icons/Usdc";
import { UsdcWrapper } from "../components/UsdcWrapper/UsdcWrapper";
import { WifiSpeaker1 } from "../icons/WifiSpeaker1";
import { WiredController } from "../icons/WiredController";
import { Xmr } from "../icons/Xmr";
import { XmrWrapper } from "../components/XmrWrapper/XmrWrapper";
import "../styles/style.css";
import WalletTotal from "../components/WalletTotal";
import '../styles/styleguide.css';
import { useEffect, useState } from 'react';
import Line24 from '../assets/img/line-24.svg'



function Wallet () {
  
  return (
  <div className="page-wrapper">
      <div className="blur-group">
        <Blur circleClassName="blur-instance" className="blur-5" />
        <Blur circleClassName="design-component-instance-node" className="blur-5-instance" />
      </div> 
      {/* <img className="vector" alt="Vector" src="image.svg" />
          <Blob11 className="blob" color="#A3F49D" />
          <img className="img" alt="Group" src="group.png" />
          <img className="vector-2" alt="Vector" src="vector.svg" />
          <IconComponentNode className="blob-1" />  */}
        <div className="wallet-display-wrapper">
            <WalletTotal />
          <img className="line" alt="Line" src={Line24} />
        </div>
   </div>
  );
};

export default Wallet;