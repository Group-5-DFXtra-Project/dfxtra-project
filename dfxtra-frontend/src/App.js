import './App.css';
import data from './sampleProfileInfo.json';
import Certifications from './components/Certifications/Certifications.jsx';
import Experience from './components/Experience/Experience.jsx';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ProfileHeader from './components/profileHeader/profileHeader.jsx';
import Qualifications from './components/Qualifications/Qualifications.jsx';

const sampleProfile = JSON.parse(JSON.stringify(data));

const certificationsData = sampleProfile.profileInfo.certifications;
const qualificationsData = sampleProfile.profileInfo.qualifications;
const experienceData = sampleProfile.profileInfo.experience;
const displayName = sampleProfile.profileInfo.profileHeader.displayName;
const user = sampleProfile.profileInfo.profileHeader;

function App() {
	return (
		<div className="App">
			<Navbar />
			<Header displayName={displayName} />
			<div className="container main-content">
				<div className="row">
					<div className="col">
						<ProfileHeader user={user} className="profile-header" />
					</div>
				</div>
				<div className="row">
					<div className="col-lg-7">
						<Experience experienceData={experienceData} className="experience" />
					</div>
					<div className="col-lg-5">
						<Certifications certificationsData={certificationsData} className="certifications" />
						<Qualifications qualificationsData={qualificationsData} className="qualifications" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
