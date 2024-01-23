import WalletSearch from "../components/WalletSearch";
import WalletTotal from "../components/WalletTotal";


function Wallet () {
    return (
        <div>
            <div>
                <WalletTotal></WalletTotal>
            </div>
            <div>
                <WalletSearch></WalletSearch>
            </div>
            <div>
                <section className="currency-grid"> {/* Section for currency cards grid */}
                    {/* {NFTs ? (
                        NFTs.map((NFT) => (
                            <div key={NFT.id.tokenId}>
                            <NFTCard
                                id={NFT.id.tokenId}
                                address={NFT.contract.address}
                                name={NFT.contractMetadata.name}
                                heroName={NFT.heroName}
                                power={NFT.power}
                                deduction={NFT.deduction}
                                health={NFT.health}
                                presence={NFT.presence}
                            />
                            </div>
                        ))
                        ) : (
                        <div className="no-nfts">No NFTs found</div>
                        )}*/} No Currencies found
                </section> 
                <section className="nft-grid"> {/* Section for nft cards grid */}
                    {/* {NFTs ? (
                        NFTs.map((NFT) => (
                            <div key={NFT.id.tokenId}>
                            <NFTCard
                                id={NFT.id.tokenId}
                                address={NFT.contract.address}
                                name={NFT.contractMetadata.name}
                                heroName={NFT.heroName}
                                power={NFT.power}
                                deduction={NFT.deduction}
                                health={NFT.health}
                                presence={NFT.presence}
                            />
                            </div>
                        ))
                        ) : (
                        <div className="no-nfts">No NFTs found</div>
                        )}*/} No Collectibles found
                </section> 
                <section className="other-grid"> {/* Section for others cards grid */}
                    {/* {NFTs ? (
                        NFTs.map((NFT) => (
                            <div key={NFT.id.tokenId}>
                            <NFTCard
                                id={NFT.id.tokenId}
                                address={NFT.contract.address}
                                name={NFT.contractMetadata.name}
                                heroName={NFT.heroName}
                                power={NFT.power}
                                deduction={NFT.deduction}
                                health={NFT.health}
                                presence={NFT.presence}
                            />
                            </div>
                        ))
                        ) : (
                        <div className="no-nfts">No NFTs found</div>
                        )}*/} No other items in wallet found
                </section> 

            </div>

        </div>
    )
}

export default Wallet;