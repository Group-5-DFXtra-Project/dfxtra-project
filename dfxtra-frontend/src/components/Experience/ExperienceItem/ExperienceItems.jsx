// Individual Experience Component

const ExperienceItem = ({experience}) => {
    const { employerName, employerImage, position, description, startDate, endDate, reference } = experience
	return (
		<div>
			<h4>{employerName}</h4>
			<img src={employerImage} alt="logo of the employer" />
		</div>
	);
};

export default ExperienceItem;
