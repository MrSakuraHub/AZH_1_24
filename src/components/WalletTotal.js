

function WalletTotal () {
    return(
        <div>
            <p>Total Balance</p>
            <h1>1000 USD</h1> {/* This is where the call functions will go to get wallet balances */}
            <p>-120 AZERO</p>
            <div>
                <button>Send Money</button> 
                <button> Request  </button>
                <button>   Refill  </button> 
                <button>  History  </button>
            </div>
        </div>
    )
}

export default WalletTotal;