// Certifications Component

import '../styles/Certification.css';

import CertificationItem from './CertificationsItem/CertificationItem';

const Certifications = ({ certificationsData }) => {
	//map each of items in certifications
	const certificationList = certificationsData.map((certification) => <CertificationItem key={certification.certId} certification={certification} />);

	return (
		<div className="cert-box">
			<h3>Certifications</h3>
			<div className="cert-list">{certificationList}</div>
		</div>
	);
};

export default Certifications;
