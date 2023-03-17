// Individual Qualification Component

const QualificationItem = ({qualification}) => {
    const { institutionName, institutionImage, educationLevel, subject, grade, description, startDate, endDate } = qualification;
	return (
		<div>
			<h4>{institutionName}</h4>
			<img src={institutionImage} alt="logo of the Institution" />
		</div>
	);
};

export default QualificationItem;
