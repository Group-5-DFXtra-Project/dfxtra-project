// Individual Qualification Component

const QualificationItem = ({ qualification }) => {
	const { institutionName, institutionImage, educationLevel, subject, grade, description, startDate, endDate } = qualification;
	return (
		<div className="qual-item">
			<img src={institutionImage} alt="logo of the Institution" />
			<div className="qual-info">
				<h4 className="qual-subject">
					{educationLevel} - {subject}
				</h4>
				<p className="qual-name">{institutionName}</p>
			</div>
		</div>
	);
};

export default QualificationItem;
