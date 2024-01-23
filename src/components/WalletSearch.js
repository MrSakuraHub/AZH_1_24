

function WalletSearch () {
    return (
        <div>
            <form>
                <label>Search</label>
                <input></input>
            </form>
            <select name="Catagory">
                <option>Eth Network</option>
                <option>Aleph Zero Network</option>
            </select>
            <select name="Sort By">
                <option>Price</option>
                <option>Network</option>
                <option>type</option>
            </select>
        </div>
    )
}

export default WalletSearch;