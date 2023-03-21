// Individual Qualification Component

const QualificationItem = ({ qualification }) => {
	const { institutionName, institutionImage, educationLevel, subject, grade, description, startDate, endDate } = qualification;
	return (
		<div className="qual-item text-center">
			<img src={institutionImage} alt="logo of the Institution" />
			<div className="qual-info">
				<h6 className="qual-subject">
					{educationLevel} - {subject}
				</h6>
				<p className="qual-name">{institutionName}</p>
			</div>
		</div>
	);
};

export default QualificationItem;
