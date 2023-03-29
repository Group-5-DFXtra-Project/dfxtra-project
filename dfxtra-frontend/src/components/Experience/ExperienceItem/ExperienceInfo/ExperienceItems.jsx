// Individual Experience Component
import { useState } from 'react';
import ExperienceInfo from './ExperienceInfo.jsx';
const ExperienceItem = ({ experience, getProfileInfo }) => {
	const { employerName, employerImage, position, startDate, endDate } = experience;
	const [Expand, setExpand] = useState(false);

	const expandInfo = () => {
		setExpand(true);
		if (Expand === true) {
			setExpand(false);
		}
	};

	return (
		<>
			<div className="ex-item">
				<div className="ex-employer">
					<img src={employerImage} alt="logo of the employer" />
					<h6 className="ex-name">{employerName}</h6>
				</div>
				<p className="ex-position">{position}</p>
				<p className="ex-dates">
					{startDate} - {endDate}
				</p>
				<button className="btn btn-primary" onClick={expandInfo}>
					{Expand ? '-' : '+'}
				</button>
			</div>

			{Expand && <ExperienceInfo experience={experience} getProfileInfo={getProfileInfo} />}
		</>
	);
};

export default ExperienceItem;
