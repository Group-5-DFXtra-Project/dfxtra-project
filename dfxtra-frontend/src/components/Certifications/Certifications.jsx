// Certifications Component
import { useState } from 'react';
import '../styles/Certification.css';
import CertificationForm from './CertificationForm';

import CertificationItem from './CertificationsItem/CertificationItem';

const Certifications = ({ certificationsData }) => {
	const [isCertificationForm, setIsCertificationForm] = useState(false);
	//map each of items in certifications
	const certificationList = certificationsData.map((certification) => <CertificationItem key={certification.certId} certification={certification} />);
	const handleClick = () => {
		if (isCertificationForm === true) {
			setIsCertificationForm(false);
		}
		if (isCertificationForm === false) {
			setIsCertificationForm(true);
		}
	};

	return (
		<div className="cert-box">
			<h3>Certifications</h3>
			<div className="cert-list">{certificationList}</div>
			<button className="btn btn-primary edit-button" onClick={handleClick}>
				{isCertificationForm ? 'x' : 'Add'}
			</button>
			{isCertificationForm && <CertificationForm setIsCertificationForm={setIsCertificationForm} />}
		</div>
	);
};

export default Certifications;
