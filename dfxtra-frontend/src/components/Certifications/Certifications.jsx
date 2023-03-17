// Certifications Component

import '../styles/Certification.css';

import CertificationItem from './CertificationsItem/CertificationItem';

const Certifications = ({ certificationsData }) => {
	//map each of items in certifications
	const certificationList = certificationsData.map((certification) => <CertificationItem key={certification.certId} certification={certification} />);

	return (
		<div className="cert-box">
			<h2>Certifications</h2>
			<div className="cert-list">{certificationList}</div>
		</div>
	);
};

export default Certifications;
