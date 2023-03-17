import './App.css';
import data from "./sampleProfileInfo.json"
import Certifications from './components/Certifications/Certifications.jsx'
import Experience from './components/Experience/Experience.jsx'
import Qualifications from './components/Qualifications/Qualifications.jsx'

const sampleProfile = JSON.parse(JSON.stringify(data))

const certificationsData = sampleProfile.profileInfo.certifications;
const qualificationsData = sampleProfile.profileInfo.qualifications;
const experienceData = sampleProfile.profileInfo.experience;



function App() {
  return (
    <div className="App">
      <Certifications certificationsData={certificationsData}/>
      <Qualifications qualificationsData={qualificationsData}/>
      <Experience experienceData={experienceData}/>

    </div>
  );
}

export default App;
