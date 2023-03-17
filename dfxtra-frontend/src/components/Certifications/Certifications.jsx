// Certifications Component

import CertificationItem from './CertificationsItem/CertificationItem';

const Certifications = ({certificationsData}) => {
	//map each of items in certifications
	const certificationList = certificationsData.map((certification) => <CertificationItem key={certification.certId} certification={certification} />);

	return (
		<>
			<h2>Certifications</h2>
			{certificationList}
		</>
	);
};

export default Certifications;
