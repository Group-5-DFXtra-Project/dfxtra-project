// Experience Component

import ExperienceItem from './ExperienceItem/ExperienceItems.jsx';
import '../styles/Experience.css';

const Experience = ({ experienceData }) => {
	//map each of items in certifications
	const ExperienceList = experienceData.map((experience) => <ExperienceItem key={experience.experienceId} experience={experience} />);

	return (
		<div className="ex-box">
			<h2>Experience</h2>
			<p className="ex-subtext">View the work experience of the engineer</p>
			<div className="ex-table-headers">
				<h6>EMPLOYER</h6>
				<h6>POSITION</h6>
				<h6>DATES</h6>
				<h6> </h6>
			</div>
			<hr />
			<div className="ex-list">{ExperienceList}</div>
		</div>
	);
};

export default Experience;
