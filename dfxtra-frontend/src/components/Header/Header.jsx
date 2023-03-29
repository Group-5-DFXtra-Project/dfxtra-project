import React from "react";
import "../styles/Header.css"

const Header = ({ displayName, getProfileInfo }) => {
    return (
        <header className="header">
            Hello There, {displayName} 👋
        </header>

    );
};

export default Header;
