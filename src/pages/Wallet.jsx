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
import '../index.css';
import '../styles/create.css';

function Wallet () {
  return (
    <div className="f">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
        <div className="group">
            <Blur circleClassName="blur-instance" className="blur-5" />
            <Blur circleClassName="design-component-instance-node" className="blur-5-instance" />
          </div>
          <img className="vector" alt="Vector" src="image.svg" />
          <Blob11 className="blob" color="#A3F49D" />
          <img className="img" alt="Group" src="group.png" />
          <img className="vector-2" alt="Vector" src="vector.svg" />
          <IconComponentNode className="blob-1" />
          <div className="div">
            <Blob11 className="blob-1-instance" color="#28CD6A" />
            <div className="frame-2">
              <div className="frame-3">
                <div className="heading">Tot Balance</div>
                <div className="frame-4">
                  <div className="heading-2">2.820</div>
                  <div className="heading-3">USD</div>
                </div>
                <div className="heading-4">~120 AZERO</div>
              </div>
              <div className="frame-5">
                <Button className="button-instance" priority="primary" property1="default" showIcon={false} />
                <Button
                  className="button-instance"
                  priority="secondary"
                  property1="default"
                  showIcon={false}
                  text1="Request"
                />
                <Button
                  className="button-instance"
                  priority="secondary"
                  property1="default"
                  showIcon={false}
                  text1="Refill"
                />
                <Button className="button-instance" priority="secondary" property1="default" text1="Other action" />
                <Button className="button-instance" priority="secondary" property1="default" text1="History" />
              </div>
            </div>
            <img className="line" alt="Line" src="line-24.svg" />
            <div className="frame-6">
              <div className="text-input">
                <MagnifyingGlass1 className="magnifying-glass" color="#6C998E" />
                <input className="text" placeholder="Search" type="text" />
              </div>
              <Dropdown
                chevronDownColor="#6C998E"
                chevronDownStyleOverrideClassName="dropdown-3"
                className="dropdown-instance"
                divClassName="dropdown-2"
                priority="primary"
                property1="hover"
                text1="Category"
                visible={false}
              />
              <Dropdown
                chevronDownColor="#6C998E"
                chevronDownStyleOverrideClassName="dropdown-3"
                className="dropdown-instance"
                divClassName="dropdown-2"
                priority="primary"
                property1="hover"
                text1="Sort by"
                visible={false}
              />
            </div>
            <div className="frame-7">
              <div className="frame-8">
                <div className="frame-9">
                  <div className="heading-5">Currencies</div>
                  <div className="expand-arrows-wrapper">
                    <ExpandArrows className="expand-arrows" />
                  </div>
                </div>
                <div className="frame-10">
                  <div className="list">
                    <div className="frame-11">
                      <Btc className="icon-instance-node" />
                      <div className="center-list-item">
                        <div className="text-wrapper-2">Bitcoin</div>
                        <div className="text-wrapper-3">BTC</div>
                      </div>
                    </div>
                    <div className="center-list-item-2">
                      <div className="text-wrapper-2"> 0.2 BTC</div>
                      <div className="text-wrapper-3">~ 99,284.01 $</div>
                    </div>
                  </div>
                  <img className="line-2" alt="Line" src="line-25.svg" />
                  <div className="list">
                    <div className="frame-11">
                      <Link className="icon-instance-node" />
                      <div className="center-list-item">
                        <div className="text-wrapper-2">Bitcoin</div>
                        <div className="text-wrapper-3">BTC</div>
                      </div>
                    </div>
                    <div className="center-list-item-2">
                      <div className="text-wrapper-2"> 0.2 BTC</div>
                      <div className="text-wrapper-3">~ 99,284.01 $</div>
                    </div>
                  </div>
                  <img className="line-2" alt="Line" src="line-28.svg" />
                  <div className="list">
                    <div className="frame-11">
                      <Xmr className="icon-instance-node" />
                      <div className="center-list-item">
                        <div className="text-wrapper-2">Bitcoin</div>
                        <div className="text-wrapper-3">BTC</div>
                      </div>
                    </div>
                    <div className="center-list-item-2">
                      <div className="text-wrapper-2"> 0.2 BTC</div>
                      <div className="text-wrapper-3">~ 99,284.01 $</div>
                    </div>
                  </div>
                  <img className="line-2" alt="Line" src="line-26.svg" />
                  <div className="list">
                    <div className="frame-11">
                      <Usdc className="icon-instance-node" />
                      <div className="center-list-item">
                        <div className="text-wrapper-2">Bitcoin</div>
                        <div className="text-wrapper-3">BTC</div>
                      </div>
                    </div>
                    <div className="center-list-item-2">
                      <div className="text-wrapper-2"> 0.2 BTC</div>
                      <div className="text-wrapper-3">~ 99,284.01 $</div>
                    </div>
                  </div>
                  <img className="line-2" alt="Line" src="line-29.svg" />
                  <div className="list">
                    <div className="frame-11">
                      <Algo className="icon-instance-node" />
                      <div className="center-list-item">
                        <div className="text-wrapper-2">Bitcoin</div>
                        <div className="text-wrapper-3">BTC</div>
                      </div>
                    </div>
                    <div className="center-list-item-2">
                      <div className="text-wrapper-2"> 0.2 BTC</div>
                      <div className="text-wrapper-3">~ 99,284.01 $</div>
                    </div>
                  </div>
                  <img className="line-3" alt="Line" src="line-27.svg" />
                  <div className="rectangle" />
                  <div className="rectangle" />
                  <div className="rectangle" />
                  <div className="rectangle" />
                  <div className="rectangle" />
                </div>
              </div>
              <div className="frame-12">
                <div className="frame-13">
                  <div className="heading-5">Collectibles</div>
                  <div className="expand-arrows-wrapper">
                    <ExpandArrows className="expand-arrows" />
                  </div>
                </div>
                <div className="frame-14">
                  <div className="frame-15">
                    <div className="frame-wrapper">
                      <div className="frame-16">
                        <div className="frame-17">
                          <div className="div-wrapper">
                            <div className="music-wrapper">
                              <Music className="music-instance" />
                            </div>
                          </div>
                          <img className="rectangle-2" alt="Rectangle" src="rectangle-2330.png" />
                        </div>
                        <div className="caption-wrapper">
                          <div className="text-wrapper-4">Just like you</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-16">
                      <div className="rectangle-wrapper">
                        <img className="rectangle-3" alt="Rectangle" src="image.png" />
                      </div>
                      <div className="caption-wrapper">
                        <div className="text-wrapper-4">Muramaki flow...</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-15">
                    <div className="frame-18">
                      <div className="rectangle-wrapper">
                        <img className="rectangle-4" alt="Rectangle" src="rectangle-2330-2.png" />
                      </div>
                      <div className="caption-wrapper">
                        <div className="text-wrapper-4">Muramaki flow...</div>
                      </div>
                    </div>
                    <div className="frame-18">
                      <div className="rectangle-wrapper">
                        <img className="rectangle-4" alt="Rectangle" src="rectangle-2330-3.png" />
                      </div>
                      <div className="caption-wrapper">
                        <div className="text-wrapper-4">Muramaki flow...</div>
                      </div>
                    </div>
                  </div>
                  <div className="list">
                    <div className="frame-11">
                      <BtcWrapper />
                      <div className="center-list-item">
                        <div className="subcaption">BTC</div>
                      </div>
                    </div>
                    <div className="center-list-item-2">
                      <div className="text-wrapper-2"> 0.2 BTC</div>
                      <div className="text-wrapper-3">~ 99,284.01 $</div>
                    </div>
                  </div>
                  <img className="line-4" alt="Line" src="line-25-2.svg" />
                  <div className="list">
                    <div className="frame-11">
                      <LinkWrapper />
                      <div className="center-list-item">
                        <div className="text-wrapper-2">Bitcoin</div>
                        <div className="text-wrapper-3">BTC</div>
                      </div>
                    </div>
                    <div className="center-list-item-2">
                      <div className="text-wrapper-2"> 0.2 BTC</div>
                      <div className="text-wrapper-3">~ 99,284.01 $</div>
                    </div>
                  </div>
                  <img className="line-5" alt="Line" src="line-28-2.svg" />
                  <div className="list">
                    <div className="frame-11">
                      <XmrWrapper />
                      <div className="center-list-item">
                        <div className="text-wrapper-2">Bitcoin</div>
                        <div className="text-wrapper-3">BTC</div>
                      </div>
                    </div>
                    <div className="center-list-item-2">
                      <div className="text-wrapper-2"> 0.2 BTC</div>
                      <div className="text-wrapper-3">~ 99,284.01 $</div>
                    </div>
                  </div>
                  <img className="line-6" alt="Line" src="line-26-2.svg" />
                  <div className="list">
                    <div className="frame-11">
                      <UsdcWrapper />
                      <div className="center-list-item">
                        <div className="text-wrapper-2">Bitcoin</div>
                        <div className="text-wrapper-3">BTC</div>
                      </div>
                    </div>
                    <div className="center-list-item-2">
                      <div className="text-wrapper-2"> 0.2 BTC</div>
                      <div className="text-wrapper-3">~ 99,284.01 $</div>
                    </div>
                  </div>
                  <img className="line-7" alt="Line" src="line-29-2.svg" />
                  <div className="list">
                    <div className="frame-11">
                      <AlgoWrapper />
                      <div className="center-list-item">
                        <div className="text-wrapper-2">Bitcoin</div>
                        <div className="text-wrapper-3">BTC</div>
                      </div>
                    </div>
                    <div className="center-list-item-2">
                      <div className="text-wrapper-2"> 0.2 BTC</div>
                      <div className="text-wrapper-3">~ 99,284.01 $</div>
                    </div>
                  </div>
                  <img className="line-8" alt="Line" src="line-27-2.svg" />
                  <div className="rectangle" />
                  <div className="rectangle" />
                  <div className="rectangle" />
                  <div className="rectangle" />
                  <div className="rectangle" />
                </div>
              </div>
              <div className="frame-19">
                <div className="frame-20">
                  <div className="heading-5">Documents</div>
                  <div className="expand-arrows-wrapper">
                    <ExpandArrows className="expand-arrows" />
                  </div>
                </div>
                <div className="frame-10">
                  <div className="list-2">
                    <div className="frame-11">
                      <div className="frame-21">
                        <File className="icon-instance-node-2" color="#2EB3FF" />
                      </div>
                      <div className="center-list-item">
                        <div className="text-wrapper-4">Bills</div>
                      </div>
                    </div>
                    <ChevronRight className="icon-instance-node-2" color="#3D7064" />
                  </div>
                  <img className="line-2" alt="Line" src="line-25-3.svg" />
                  <div className="list-2">
                    <div className="frame-11">
                      <div className="frame-21">
                        <PhoneDialAlt className="icon-instance-node-2" color="#2EB3FF" />
                      </div>
                      <div className="center-list-item">
                        <div className="text-wrapper-4">Phone bills</div>
                      </div>
                    </div>
                    <ChevronRight className="icon-instance-node-2" color="#3D7064" />
                  </div>
                  <img className="line-2" alt="Line" src="line-28-3.svg" />
                  <div className="list-2">
                    <div className="frame-11">
                      <div className="frame-21">
                        <ClipboardAdd1 className="icon-instance-node-2" color="#2EB3FF" />
                      </div>
                      <div className="center-list-item">
                        <div className="text-wrapper-4">Health</div>
                      </div>
                    </div>
                    <ChevronRight className="icon-instance-node-2" color="#3D7064" />
                  </div>
                  <img className="line-2" alt="Line" src="line-30.svg" />
                  <div className="list-2">
                    <div className="frame-11">
                      <div className="frame-21">
                        <ArchiveFiles className="icon-instance-node-2" color="#2EB3FF" />
                      </div>
                      <div className="center-list-item">
                        <div className="text-wrapper-4">Recipts</div>
                      </div>
                    </div>
                    <ChevronRight className="icon-instance-node-2" color="#3D7064" />
                  </div>
                  <img className="line-2" alt="Line" src="line-26-3.svg" />
                  <div className="list">
                    <div className="frame-11">
                      <Usdc className="icon-instance-node" />
                      <div className="center-list-item">
                        <div className="text-wrapper-4">Bitcoin</div>
                        <div className="text-wrapper-3">BTC</div>
                      </div>
                    </div>
                    <div className="center-list-item-2">
                      <div className="text-wrapper-4"> 0.2 BTC</div>
                      <div className="text-wrapper-3">~ 99,284.01 $</div>
                    </div>
                  </div>
                  <img className="line-9" alt="Line" src="line-29-3.svg" />
                  <div className="list">
                    <div className="frame-11">
                      <AlgoWrapper />
                      <div className="center-list-item">
                        <div className="text-wrapper-4">Bitcoin</div>
                        <div className="text-wrapper-3">BTC</div>
                      </div>
                    </div>
                    <div className="center-list-item-2">
                      <div className="text-wrapper-4"> 0.2 BTC</div>
                      <div className="text-wrapper-3">~ 99,284.01 $</div>
                    </div>
                  </div>
                  <img className="line-10" alt="Line" src="line-27-3.svg" />
                  <div className="rectangle" />
                  <div className="rectangle" />
                  <div className="rectangle" />
                  <div className="rectangle" />
                  <div className="rectangle" />
                </div>
              </div>
              <div className="frame-22">
                <div className="frame-23">
                  <div className="heading-5">Others</div>
                  <div className="expand-arrows-wrapper">
                    <ExpandArrows className="expand-arrows" />
                  </div>
                </div>
                <div className="frame-10">
                  <div className="list-3">
                    <div className="frame-11">
                      <div className="frame-21">
                        <WifiSpeaker1 className="icon-instance-node-2" color="#FF5C25" />
                      </div>
                      <div className="center-list-item">
                        <div className="text-wrapper-4">TK concert</div>
                        <div className="text-wrapper-3">Ticket</div>
                      </div>
                    </div>
                    <div className="center-list-item-2">
                      <div className="text-wrapper-4"> 0.2 BTC</div>
                      <div className="text-wrapper-3">~ 99,284.01 $</div>
                    </div>
                  </div>
                  <img className="line-2" alt="Line" src="line-25-4.svg" />
                  <div className="list-3">
                    <div className="frame-11">
                      <div className="frame-21">
                        <Refresh2 className="icon-instance-node-2" color="#FF5C25" />
                      </div>
                      <div className="center-list-item-3">
                        <div className="text-wrapper-4">Bitstreaming</div>
                        <div className="text-wrapper-3">Subscritpon</div>
                      </div>
                    </div>
                    <div className="center-list-item-2">
                      <div className="text-wrapper-4"> 0.2 BTC</div>
                      <div className="text-wrapper-3">~ 99,284.01 $</div>
                    </div>
                  </div>
                  <img className="line-2" alt="Line" src="line-28-4.svg" />
                  <div className="list-3">
                    <div className="frame-11">
                      <div className="frame-21">
                        <WiredController className="icon-instance-node-2" color="#FF5C25" />
                      </div>
                      <div className="center-list-item-4">
                        <div className="text-wrapper-4">Gameme</div>
                        <div className="text-wrapper-3">Subscription</div>
                      </div>
                    </div>
                    <div className="center-list-item-2">
                      <div className="text-wrapper-4"> 0.2 BTC</div>
                      <div className="text-wrapper-3">~ 99,284.01 $</div>
                    </div>
                  </div>
                  <img className="line-2" alt="Line" src="line-30-2.svg" />
                  <div className="list-3">
                    <div className="frame-11">
                      <div className="frame-21">
                        <ImageWandMagicRightStars1 className="icon-instance-node-2" color="#FF5C25" />
                      </div>
                      <div className="center-list-item">
                        <div className="text-wrapper-4">Magic AI</div>
                        <div className="text-wrapper-3">Mix</div>
                      </div>
                    </div>
                    <div className="center-list-item-2">
                      <div className="text-wrapper-4"> 0.2 BTC</div>
                      <div className="text-wrapper-3">~ 99,284.01 $</div>
                    </div>
                  </div>
                  <img className="line-2" alt="Line" src="line-27-4.svg" />
                  <div className="rectangle" />
                  <div className="rectangle" />
                  <div className="rectangle" />
                  <div className="rectangle" />
                  <div className="rectangle" />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-24">
            <img className="mask-group" alt="Mask group" src="mask-group.png" />
            <div className="frame-25">
              <div className="heading">Mayclare</div>
              <div className="heading-wrapper">
                <div className="heading-6">settings</div>
              </div>
            </div>
          </div>
          <div className="rectangle-5" />
        </div>
      </div>
    </div>
  );
};

export default Wallet;