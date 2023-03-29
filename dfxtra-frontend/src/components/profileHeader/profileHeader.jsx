import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import { updateProfileHeader } from '../../utils/DataServices';
import '../styles/profileHeader.css';

const ProfileHeader = ({ user, getProfileInfo }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [formValues, setFormValues] = useState({
		displayName: user.displayName,
		tagLine: user.tagLine,
		overview: user.overview,
		profilePicture: user.profilePicture,
		githubLink: user.githubLink,
		linkedinLink: user.linkedinLink,
	});

	const handleInputChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await updateProfileHeader(formValues);
			setModalIsOpen(false);
			getProfileInfo();
			return response;
		} catch (e) {
			return { error: e.code, errorMessage: e.message };
		}
	};

	return (
		<div className="profileHeader">
			<div className="leftColumn">
				<img src={user?.profilePicture ? user.profilePicture : ``} alt="Profile not found" className="profilePicture" />

				<div className="Links">
					Links
					<a href={user.githubLink} target="_blank" rel="noopener noreferrer">
						<img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894__480.png" alt="github"></img>
					</a>
					<a href={user.linkedinLink} target="_blank" rel="noopener noreferrer">
						<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin"></img>
					</a>
				</div>
			</div>

			<div className="content">
				<h1>{user.displayName}</h1>
				<h5>{user.tagLine}</h5>
				<div className="Overview">{user.overview}</div>
			</div>

			<button onClick={() => setModalIsOpen(true)} className="btn btn-primary">
				Edit
			</button>
			<Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} ariaHideApp={false}>
				<h2>Edit Profile Header</h2>
				<form onSubmit={handleSubmit}>
					<input type="text" name="displayName" value={formValues.displayName} onChange={handleInputChange} placeholder="display name" className="form-control" />
					<input type="text" name="tagLine" value={formValues.tagLine} onChange={handleInputChange} placeholder="tag line" className="form-control" />
					<input type="text" name="overview" value={formValues.overview} onChange={handleInputChange} placeholder="overview" className="form-control" />
					<input type="text" name="profilePicture" value={formValues.profilePicture} onChange={handleInputChange} placeholder="profile picture" className="form-control" />
					<input type="text" name="githubLink" value={formValues.githubLink} onChange={handleInputChange} placeholder="github link" className="form-control" />
					<input type="text" name="linkedinLink" value={formValues.linkedinLink} onChange={handleInputChange} placeholder="linkedin Link" className="form-control" />

					<button type="submit" className="btn btn-primary">
						Save
					</button>
					<button onClick={() => setModalIsOpen(false)} className="btn btn-primary">
						Close
					</button>
				</form>
			</Modal>
		</div>
	);
};

export default ProfileHeader;
