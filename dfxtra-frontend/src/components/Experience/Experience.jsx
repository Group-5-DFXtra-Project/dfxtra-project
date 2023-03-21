// Experience Component

import ExperienceItem from './ExperienceItem/ExperienceItems.jsx';
import '../styles/Experience.css';

const Experience = ({ experienceData }) => {
	//map each of items in certifications
	const ExperienceList = experienceData.map((experience) => <ExperienceItem key={experience.experienceId} experience={experience} />);

	return (
		<div className="ex-box">
			<h3>Experience</h3>
			<p className="ex-subtext">View the work experience of the engineer</p>
			<div className="ex-table-headers">
				<p className="fs-6">EMPLOYER</p>
				<p className="fs-6">POSITION</p>
				<p className="fs-6">DATES</p>
				<p className="fs-6"> </p>
			</div>
			<hr />
			<div className="ex-list">{ExperienceList}</div>
		</div>
	);
};

export default Experience;
