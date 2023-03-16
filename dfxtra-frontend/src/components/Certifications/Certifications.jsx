// Certifications Component

import CertificationItem from './CertificationsItem/CertificationItem';

const Certifications = (props) => {
	//map each of items in certifications
	const certificationList = props.map((certification) => <CertificationItem certName={certification.certName} certImage={certification.certImage} />);

	return (
		<>
			<h2>Certifications</h2>
			{certificationList}
		</>
	);
};

export default Certifications;
