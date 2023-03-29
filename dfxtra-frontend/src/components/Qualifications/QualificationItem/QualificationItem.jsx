// Individual Qualification Component

const QualificationItem = ({ qualification }) => {
	const { qualName, qualImage, qualLevel, qualSubject} = qualification;
	return (
		<div className="qual-item text-center">
			<img src={qualImage} alt="logo of the Institution" />
			<div className="qual-info">
				<h6 className="qual-subject">
					{qualLevel} - {qualSubject}
				</h6>
				<p className="qual-name">{qualName}</p>
			</div>
		</div>
	);
};

export default QualificationItem;
