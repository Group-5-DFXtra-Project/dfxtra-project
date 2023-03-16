// Individual Qualification Component

const QualificationItem = (props) => {
    const { institutionName, institutionImage, educationLevel, subject, grade, description, startDate, endDate } = props
	return (
		<div>
			<h4>{institutionName}</h4>
			<img src={institutionImage} alt="logo of the Institution" />
		</div>
	);
};

export default QualificationItem;
