// Qualifications Component
import QualificationForm from './QualificationForm.jsx';
import '../styles/Qualifications.css';
import { useState } from 'react';
import Modal from 'react-modal';

import QualificationItem from './QualificationItem/QualificationItem';

const Qualifications = ({ qualificationsData, getProfileInfo }) => {
	const QualificationList = qualificationsData.map((qualification) => <QualificationItem key={qualification._id} qualification={qualification} />);

	const [isQualificationForm, setIsQualificationForm] = useState(false);

	const handleClick = () => {
		if (isQualificationForm === true) {
			setIsQualificationForm(false);
		}
		if (isQualificationForm === false) {
			setIsQualificationForm(true);
		}
	};

	return (
		<div className="qual-box">
			<h3>Qualifications</h3>
			<div className="qual-list">{QualificationList}</div>

			<button className="btn btn-primary edit-button" onClick={handleClick}>
				{isQualificationForm ? 'x' : 'Add'}
			</button>

			<Modal isOpen={isQualificationForm} onRequestClose={() => setIsQualificationForm(false)} ariaHideApp={false}>
				<QualificationForm setIsQualificationForm={setIsQualificationForm} getProfileInfo={getProfileInfo} />
			</Modal>
		</div>
	);
};

export default Qualifications;
