import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar () {
    return (
        <div className="navigation">
            <Link to='SignUp'>Sign UP</Link>
        </div>
    )
}

export default Navbar;