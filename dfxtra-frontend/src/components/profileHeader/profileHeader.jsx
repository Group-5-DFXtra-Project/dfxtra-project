import React from 'react';
import '../styles/profileHeader.css';

const profileHeader = ({ user }) => {
	return (
		<div className="profileHeader">
			<div className="leftColumn">
				<img src={user?.profilePicture ? user.profilePicture : ``} alt="Profile not found" className="profilePicture" />

				<div className="Links">
					Links
					<a href="https://github.com" target="_blank" rel="noopener noreferrer">
						<img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894__480.png" alt="github"></img>
					</a>
					<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
						<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin"></img>
					</a>
				</div>
			</div>

			<div className="content">
				<h1>{user.displayName}</h1>
				<h5>{user.tagLine}</h5>
				<div className="Overview"> {user.overview} </div>
			</div>
		</div>
	);
};

export default profileHeader;
