// Certifications Component
import { useState } from 'react';
import Modal from 'react-modal';
import '../styles/Certification.css';
import CertificationForm from './CertificationForm';

import CertificationItem from './CertificationsItem/CertificationItem';

const Certifications = ({ certificationsData, getProfileInfo }) => {
	const [isCertificationForm, setIsCertificationForm] = useState(false);
	//map each of items in certifications
	const certificationList = certificationsData.map((certification) => <CertificationItem key={certification._id} certification={certification} />);
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
			<Modal isOpen={isCertificationForm} onRequestClose={() => setIsCertificationForm(false)} ariaHideApp={false}>
				<CertificationForm setIsCertificationForm={setIsCertificationForm} getProfileInfo={getProfileInfo} />
			</Modal>
		</div>
	);
};

export default Certifications;
