import { useState } from "react";
import { ethers } from "ethers";
import { Button, Card } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

function SeedPhrasePage() {
    const [newSeedPhrase, setNewSeedPhrase] = useState(null);  
    function generateWallet(){
      const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
      setNewSeedPhrase(mnemonic)
    }
  
  
    const content = (
        <div className="form-content">
            <div className="content">
                <div className="mnemonic">
                 <ExclamationCircleOutlined style={{ fontSize: "20px" }} />
                 <p>
                    Once you generate the seed phrase, save it securely in order to
                    recover your wallet in the future.
                 </p>
                </div>
                <Button
                    className="seedphrase-button"
                    type="primary"
                    onClick={() => generateWallet()}
                >
                    Generate Seed Phrase
                </Button>
                <Card className="seedPhraseContainer">
                {newSeedPhrase && <pre style={{whiteSpace: "pre-wrap"}}>{newSeedPhrase}</pre>}
                </Card>
                
            </div>
      </div>

    )
  
   return content
}
export default SeedPhrasePage