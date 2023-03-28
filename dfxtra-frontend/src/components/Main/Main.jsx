import Certifications from "../Certifications/Certifications.jsx";
import Experience from "../Experience/Experience.jsx";
import Header from "../Header/Header.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import ProfileHeader from "../profileHeader/profileHeader.jsx";
import Qualifications from "../Qualifications/Qualifications.jsx";
import data from "../../sampleProfileInfo.json";
import { useEffect, useState } from "react";
import { currentUser } from "../../utils/authServices.js";

const sampleProfile = JSON.parse(JSON.stringify(data));

const certificationsData = sampleProfile.profileInfo.certifications;
const qualificationsData = sampleProfile.profileInfo.qualifications;
const experienceData = sampleProfile.profileInfo.experience;
const displayName = sampleProfile.profileInfo.profileHeader.displayName;
const user = sampleProfile.profileInfo.profileHeader;

const Main = () => {
	const [User, setUser] = useState(0);

	useEffect(() => {
		setUser(currentUser());
	},[]);

	return (
		<>
			{User && 
				<div>
					<Header displayName={displayName} />
					<Navbar />
					<div className="container-fluid">
						<div className="row">
							<div className="col">
								<ProfileHeader user={user} className="profile-header" />
								<div className="row">
									<div className="col-lg-7">
										<Experience
											experienceData={experienceData}
											className="experience"
										/>
									</div>
									<div className="col-lg-5">
										<Certifications
											certificationsData={certificationsData}
											className="certifications"
										/>
										<Qualifications
											qualificationsData={qualificationsData}
											className="qualifications"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>{" "}
				</div>
			}
		</>
	);
};

export default Main;
