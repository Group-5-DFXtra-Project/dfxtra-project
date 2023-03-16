// Individual Certification Component

const CertificationItem = ({ certName, certImage }) => {
	return (
		<div>
			<h4>{certName}</h4>
			<img src={certImage} alt="logo for company" />
		</div>
	);
};

export default CertificationItem;
