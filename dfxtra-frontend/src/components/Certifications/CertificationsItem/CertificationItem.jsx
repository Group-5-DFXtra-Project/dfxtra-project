// Individual Certification Component

const CertificationItem = ({ certification }) => {
	const { certName, certImage } = certification;
	return (
		<div className="cert-item">
			<h4>{certName}</h4>
			<img src={certImage} alt="logo for company" />
		</div>
	);
};

export default CertificationItem;
