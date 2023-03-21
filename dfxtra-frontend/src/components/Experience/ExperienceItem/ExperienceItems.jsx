// Individual Experience Component

const ExperienceItem = ({ experience }) => {
	const { employerName, employerImage, position, description, startDate, endDate, reference } = experience;
	return (
		<div className="ex-item">
			<div className="ex-employer">
				<img src={employerImage} alt="logo of the employer" />
				<h4 className="ex-name">{employerName}</h4>
			</div>
			<p className="ex-position">{position}</p>
			<p className="ex-dates">
				{startDate} - {endDate}
			</p>
			<button>Expand</button>
		</div>
	);
};

export default ExperienceItem;
