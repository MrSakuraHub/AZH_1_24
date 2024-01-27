import { Button } from "./Button/Button";

function WalletTotal () {
    return(
        <div className="wallet-display">
            <div className="total-balance">
              <div className="balance-heading"> Total Balance </div>
              <div className="currency-display">
                <div className="number-display"> 2.820 </div>
                <div className="currency-type">USD</div>
              </div>
              <div className="azero-bal">~120 AZERO</div>
            </div>
            <div className="button-wrapper">
            <Button className="button-instance" 
              priority="primary" 
              property1="default" 
              showIcon={false}
              />
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
                <Button className="button-instance" 
                  priority="secondary" 
                  property1="default" 
                  text1="Other action" 
                />
                <Button className="button-instance" 
                  priority="secondary" 
                  property1="default" 
                  text1="History" 
                />
            </div>
          </div>
    )
}

export default WalletTotal;