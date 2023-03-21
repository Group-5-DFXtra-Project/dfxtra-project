import './App.css';
import data from "./sampleProfileInfo.json"
import Certifications from './components/Certifications/Certifications.jsx'
import Experience from './components/Experience/Experience.jsx'
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import ProfileHeader from './components/profileHeader/profileHeader.jsx'
import Qualifications from './components/Qualifications/Qualifications.jsx'

const sampleProfile = JSON.parse(JSON.stringify(data))

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
      <ProfileHeader user={user} />
      <Certifications certificationsData={certificationsData} />
      <Qualifications qualificationsData={qualificationsData} />
      <Experience experienceData={experienceData} />

    </div>
  );
}

export default App;
