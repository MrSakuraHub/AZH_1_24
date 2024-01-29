import { ExpandArrows } from "../icons/ExpandArrows";
import { Btc } from "../icons/Btc";

function WalletBreakdown () {
    return(
        <div className="wallet-breakdown-wrapper">
           <div className="currencies-wrapper">
              <div className="currencies-heading">
                <div className="heading-5">Currencies</div>
                <div className="expand-arrows-wrapper">
                      <ExpandArrows className="expand-arrows" />
                </div>
              </div>
              <div className="list-wrapper">
                <div className="list">
                  {/*This is where the Currencies Card Component will go */}
                  <div className="frame-11">
                      <Btc className="icon-instance-node" />
                      <div className="center-list-item">
                        <div className="text-wrapper-2">Bitcoin</div>
                        <div className="text-wrapper-3">BTC</div>
                      </div>
                      <div className="center-list-item-2">
                        <div className="text-wrapper-2"> 0.2 BTC</div>
                        <div className="text-wrapper-3">~ 99,284.01 $</div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="collectibles-wrapper">
               <div className="collectibles-heading">
                  <div className="heading-5">Collectibles</div>
                  <div className="expand-arrows-wrapper">
                    <ExpandArrows className="expand-arrows" />
                  </div>
               </div>
               <div className="collectibles-list-wrapper">
                  <div className="colletibles-list">
  
                </div>       
              </div>

            </div>
            <div className="others-wrapper">
                <div className="others-heading">
                  <div className="heading-5">Others</div>
                  <div className="expand-arrows-wrapper">
                    <ExpandArrows className="expand-arrows" />
                  </div>
                </div>
                <div className="others-list">

                </div>
              </div>
              
          </div>
    )
}

export default WalletBreakdown;