import { useState } from "react";
import "./styles/Navbar.css"

const Navbar = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <nav className={`navbar ${isExpanded ? "expanded" : ""}`}>
            <button className="toggle-btn" onClick={toggleNavbar}>
                {isExpanded ? "Collapse" : "Expand"}
            </button>
            <div className="Logo">Company Logo</div>
            <div className="sign-out">Sign Out</div>
        </nav>
    );
};

export default Navbar;