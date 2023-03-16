import logo from './logo.svg';
import './App.css';
import Qualifications from './components/Qualifications/Qualifications.jsx';

const data= {
	profileInfo: {
		"profileId": "abcd1234",
		"userId": "1234abcd",
		"profileHeader": {
			"displayName": "John Smith",
			"tagLine": "Software Engineer",
			"overview": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat egestas nibh, ac efficitur est commodo quis. Morbi orci nunc, iaculis nec est in, pretium blandit lacus. In quis mauris eu lorem efficitur posuere nec id massa. Aliquam erat volutpat. Nullam congue magna et augue pharetra, euismod tempus orci semper.",
			"profilePicture": "link",
			"githubLink": "link",
			"linkedinLink": "link"
		},
		experience: [
			{
				"experienceId": "1234poiu",
				"employerName": "Digital Futures",
				"employerImage": "link",
				"position": "Trainee",
				"startDate": "2023-01-09T00:00:01Z",
				"endDate": "2023-03-31T23:59:59Z",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat egestas nibh, ac efficitur est commodo quis. Morbi orci nunc, iaculis nec est in, pretium blandit lacus. In quis mauris eu lorem efficitur posuere nec id massa. Aliquam erat volutpat. Nullam congue magna et augue pharetra, euismod tempus orci semper.",
				"skills": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat egestas nibh, ac efficitur est commodo quis. Morbi orci nunc, iaculis nec est in, pretium blandit lacus.",
				"reference": {
					"referenceName": "Sarah Smith",
					"referenceEmail": "email@email.com",
					"referenceNumber": "07123456789"
				}
			},
			{
				"experienceId": "1234lkjh",
				"employerName": "Digital Futures",
				"employerImage": "link",
				"position": "Trainee",
				"startDate": "2023-01-09T00:00:01Z",
				"endDate": "2023-03-31T23:59:59Z",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat egestas nibh, ac efficitur est commodo quis. Morbi orci nunc, iaculis nec est in, pretium blandit lacus. In quis mauris eu lorem efficitur posuere nec id massa. Aliquam erat volutpat. Nullam congue magna et augue pharetra, euismod tempus orci semper.",
				"skills": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat egestas nibh, ac efficitur est commodo quis. Morbi orci nunc, iaculis nec est in, pretium blandit lacus.",
				"reference": {
					"referenceName": "Sarah Smith",
					"referenceEmail": "email@email.com",
					"referenceNumber": "07123456789"
				}
			},
			{
				"experienceId": "1234mnbv",
				"employerName": "Digital Futures",
				"employerImage": "link",
				"position": "Trainee",
				"startDate": "2023-01-09T00:00:01Z",
				"endDate": "2023-03-31T23:59:59Z",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat egestas nibh, ac efficitur est commodo quis. Morbi orci nunc, iaculis nec est in, pretium blandit lacus. In quis mauris eu lorem efficitur posuere nec id massa. Aliquam erat volutpat. Nullam congue magna et augue pharetra, euismod tempus orci semper.",
				"skills": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat egestas nibh, ac efficitur est commodo quis. Morbi orci nunc, iaculis nec est in, pretium blandit lacus.",
				"reference": {
					"referenceName": "Sarah Smith",
					"referenceEmail": "email@email.com",
					"referenceNumber": "07123456789"
				}
			}
		],
		certifications: [
			{
				"certId": "1234qwer",
				"certName": "Agile Explorer",
				"certImage": "link"
			},
			{
				"certId": "1234asdf",
				"certName": "Java Foundations Associate",
				"certImage": "link"
			},
			{
				"certId": "1234zxcv",
				"certName": "Java Explorer",
				"certImage": "link"
			}
		],
		qualifications: [
			{
				qualId: "qwer1234",
				institutionName: "University of Oxford",
				institutionImag: "link",
				educationLevel: "Bachelors Degree",
				subject: "History",
				grade: "2:1",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat egestas nibh, ac efficitur est commodo quis. Morbi orci nunc, iaculis nec est in, pretium blandit lacus. In quis mauris eu lorem efficitur posuere nec id massa. Aliquam erat volutpat. Nullam congue magna et augue pharetra, euismod tempus orci semper.",
				startDate: "2023-01-09T00:00:01Z",
				endDate: "2023-03-31T23:59:59Z"
			},
			{
				qualId: "asdf1234",
				institutionName: "University of Oxford",
				institutionImage: "link",
				educationLevel: "Bachelors Degree",
				subject: "History",
				grade: "2:1",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat egestas nibh, ac efficitur est commodo quis. Morbi orci nunc, iaculis nec est in, pretium blandit lacus. In quis mauris eu lorem efficitur posuere nec id massa. Aliquam erat volutpat. Nullam congue magna et augue pharetra, euismod tempus orci semper.",
				startDate: "2023-01-09T00:00:01Z",
				endDate: "2023-03-31T23:59:59Z"
			}
		]
	}
}


function App() {
	return (
		<div className="App">
{/* 			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header> */}
			<Qualifications qualificationsData={data.profileInfo.qualifications}/>
		</div>
	);
}

export default App;
