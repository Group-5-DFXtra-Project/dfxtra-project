// Experience Component

import ExperienceItem from './ExperienceItem/ExperienceInfo/ExperienceItems.jsx';
import ExperienceForm from './ExperienceForm.jsx';
import '../styles/Experience.css';
import { useState } from 'react';
import Modal from 'react-modal';

const Experience = ({ experienceData, getProfileInfo }) => {
	//map each of items in certifications
	const ExperienceList = experienceData.map((experience) => <ExperienceItem key={experience._id} experience={experience} />);

	const [isExperienceForm, setIsExperienceForm] = useState(false);

	const handleClick = () => {
		if (isExperienceForm === true) {
			setIsExperienceForm(false);
		}
		if (isExperienceForm === false) {
			setIsExperienceForm(true);
		}
	};

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
			<button className="btn btn-primary" onClick={handleClick}>
				{isExperienceForm ? `x` : `Add`}
			</button>

			<Modal isOpen={isExperienceForm} onRequestClose={() => setIsExperienceForm(false)} ariaHideApp={false}>
				<ExperienceForm setIsExperienceForm={setIsExperienceForm} getProfileInfo={getProfileInfo} />
			</Modal>
		</div>
	);
};

export default Experience;
