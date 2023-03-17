import React from 'react';
import '../styles/profileHeader.css';


const profileHeader = ({ user }) => {
    return (
        <div className="profileHeader">
            <img src={user.profilePicture} alt="Profile picture not found" className="profilePicture" />
            <h1>{user.displayName}</h1>
            <h2>{user.tagLine}</h2>
            <div className="Overview"> {user.overview} </div>
            <div className="Links">Links
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" >Github</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" >LinkedIn</a>
            </div>


        </div>
    )
}

export default profileHeader;