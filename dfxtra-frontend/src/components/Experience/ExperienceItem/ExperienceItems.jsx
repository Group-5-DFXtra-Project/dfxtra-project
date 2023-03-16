// Individual Experience Component

const ExperienceItem = (props) => {
    const { employerName, employerImage, position, description, startDate, endDate, reference } = props
	return (
		<div>
			<h4>{employerName}</h4>
			<img src={employerImage} alt="logo of the employer" />
		</div>
	);
};

export default ExperienceItem;
