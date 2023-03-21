// Individual Experience Component
import { useState } from "react";
import ExperienceInfo from "./ExperienceInfo/ExperienceInfo.jsx";
const ExperienceItem = ({ experience }) => {
	const { employerName, employerImage, position, description, startDate, endDate, reference } = experience;
	const [Expand, setExpand] = useState(false)

	const expandInfo = ()=>{
		setExpand(true)
		if (Expand === true){setExpand(false)}
	}
	
	
	return (
		<>
		<div className="ex-item">
		<div className="ex-employer">
			<img src={employerImage} alt="logo of the employer" />
			<h4 className="ex-name">{employerName}</h4>
		</div>
		<p className="ex-position">{position}</p>
		<p className="ex-dates">
			{startDate} - {endDate}
		</p>
		<button onClick={expandInfo}>Expand</button>

	</div>
	
	{Expand && <ExperienceInfo experience={experience}/>}
	</>
		
	);
};

export default ExperienceItem;
