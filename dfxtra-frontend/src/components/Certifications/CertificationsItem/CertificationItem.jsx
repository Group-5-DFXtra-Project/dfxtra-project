// Individual Certification Component

const CertificationItem = ({ certification }) => {
	const { certName, certImage } = certification;
	return (
		<div className="cert-item">
			<img src={certImage} alt="logo for company" />
			<h4 className="cert-name">{certName}</h4>
		</div>
	);
};

export default CertificationItem;
