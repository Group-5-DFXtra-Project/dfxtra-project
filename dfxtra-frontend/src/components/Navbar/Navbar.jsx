import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const navigate = useNavigate();

	const toggleNavbar = () => {
		setIsExpanded(!isExpanded);
	};

	const logOut = () => {
		localStorage.removeItem('token');
		navigate(`/`);
	};

	return (
		<nav className={`navbar ${isExpanded ? 'expanded' : ''}`}>
			<button className="toggle-btn btn btn-secondary" onClick={toggleNavbar}>
				{isExpanded ? 'Collapse' : 'Expand'}
			</button>
			<img src="https://digitalfutures.com/wp-content/uploads/2021/08/Icon_DF_Circle_Blue_White_v2.svg" alt="digital futures logo" className="navbar-brand" />
			<div className="sign-out">
				<button className="btn btn-danger m-10" onClick={logOut}>
					Log Out
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
