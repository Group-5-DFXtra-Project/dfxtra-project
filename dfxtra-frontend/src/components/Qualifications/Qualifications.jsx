// Qualifications Component

import '../styles/Qualifications.css';

import QualificationItem from './QualificationItem/QualificationItem';

const Qualifications = ({ qualificationsData, getProfileInfo }) => {
	const QualificationList = qualificationsData.map((qualification) => <QualificationItem key={qualification.qualId} qualification={qualification} getProfileInfo={getProfileInfo} />);

	return (
		<div className="qual-box">
			<h3>Qualifications</h3>
			<div className="qual-list">{QualificationList}</div>
		</div>
	);
};

export default Qualifications;
