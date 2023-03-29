import Certifications from '../Certifications/Certifications.jsx';
import Experience from '../Experience/Experience.jsx';
import Header from '../Header/Header.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import ProfileHeader from '../profileHeader/profileHeader.jsx';
import Qualifications from '../Qualifications/Qualifications.jsx';
import { useEffect, useState } from 'react';
import { currentUser } from '../../utils/authServices.js';

const Main = ({ profile, getProfileInfo }) => {
	const [User, setUser] = useState(0);

	useEffect(() => {
		setUser(currentUser());
	}, []);

	return (
		<>
			{User && (
				<div>
					<Header displayName={profile.profileHeader.displayName} getProfileInfo={getProfileInfo} />
					<Navbar />
					<div className="container-fluid">
						<div className="row">
							<div className="col">
								<ProfileHeader user={profile.profileHeader} className="profile-header" getProfileInfo={getProfileInfo} />
								<div className="row">
									<div className="col-lg-7">
										<Experience experienceData={profile.experience} className="experience" getProfileInfo={getProfileInfo} />
									</div>
									<div className="col-lg-5">
										<Certifications certificationsData={profile.certifications} className="certifications" getProfileInfo={getProfileInfo} />
										<Qualifications qualificationsData={profile.qualifications} className="qualifications" getProfileInfo={getProfileInfo} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Main;
