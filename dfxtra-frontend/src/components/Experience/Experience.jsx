// Experience Component

import ExperienceItem from './ExperienceItem/ExperienceItems.jsx';

const Experience = ({experienceData}) => {
 
	//map each of items in certifications
	const ExperienceList = experienceData.map((experience) => <ExperienceItem employerName={experience.employerName} 
    employerImage={experience.employerImage} position={experience.position} description={experience.description} startDate ={experience.startDate} endDate ={experience.endDate} reference = {experience.reference}/>);

	return (
		<>
			<h2>Experience</h2>
			{ExperienceList}
		</>
	);
};

export default Experience;
