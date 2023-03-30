import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import Main from './components/Main/Main.jsx';
import { useState, useEffect } from 'react';
import { getProfileInfo } from './utils/DataServices.js';

function App() {
	const [profile, setProfile] = useState({});
	const [error, setError] = useState({ type: ``, message: `` });

	const getProfileInfoHandler = async () => {
		const externalDataCallResult = await getProfileInfo();

		if (externalDataCallResult?.error) {
			setError({ ...externalDataCallResult.error });
		}

		setProfile(externalDataCallResult.profileInfo);
	};

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/profile" element={<Main profile={profile} getProfileInfo={getProfileInfoHandler} />} />
					<Route path="/" element={<Login getProfileInfo={getProfileInfoHandler} />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
