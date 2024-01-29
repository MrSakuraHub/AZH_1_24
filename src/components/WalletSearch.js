import { MagnifyingGlass1 } from "../icons/MagnifyingGlass1";
import { Dropdown } from "./Dropdown/Dropdown";

function WalletSearch () {
    return (
        <div className="search-wrapper">
        <div className="search">
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
            options= {['Currencies', 'Collectibles', 'Other']}
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
            options={['A-Z', 'Z-A', 'Highest Value', 'Lowest Value']}
            visible={false}
          />
      </div>
    )
}

export default WalletSearch;