// Experience Component

import ExperienceItem from './ExperienceItem/ExperienceItems.jsx';

const Experience = ({experienceData}) => {
 
	//map each of items in certifications
	const ExperienceList = experienceData.map((experience) => <ExperienceItem key= {experience.experienceId} experience={experience}/>);

	return (
		<>
			<h2>Experience</h2>
			{ExperienceList}
		</>
	);
};

export default Experience;
