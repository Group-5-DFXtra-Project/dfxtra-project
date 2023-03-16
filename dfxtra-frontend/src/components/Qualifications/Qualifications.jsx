// Qualifications Component

import QualificationItem from './QualificationItem/QualificationItem';

const Qualifications = ({qualificationsData}) => {
 
	//map each of items in certifications
	const QualificationList = qualificationsData.map((qualification) => <QualificationItem institutionName={qualification.institutionName} 
    institutionImage={qualification.institutionImage} educationLevel={qualification.educationLevel} subject={qualification.subject}
    grade ={qualification.grade} description={qualification.description} startDate ={qualification.startDate} endDate ={qualification.endDate}/>);

	return (
		<>
			<h2>Qualifications</h2>
			{QualificationList}
		</>
	);
};

export default Qualifications;
