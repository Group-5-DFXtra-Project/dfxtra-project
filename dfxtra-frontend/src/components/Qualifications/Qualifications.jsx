// Qualifications Component

import QualificationItem from './QualificationItem/QualificationItem';

const Qualifications = ({qualificationsData}) => {
 /* 
	institutionName={qualification.institutionName} 
    institutionImage={qualification.institutionImage} educationLevel={qualification.educationLevel} subject={qualification.subject}
    grade ={qualification.grade} description={qualification.description} startDate ={qualification.startDate} endDate ={qualification.endDate}
 */	//map each of items in certifications
 
	const QualificationList = qualificationsData.map((qualification) => <QualificationItem key={qualification.qualId} qualification={qualification}/>);

	return (
		<>
			<h2>Qualifications</h2>
			{QualificationList}
		</>
	);
};

export default Qualifications;
