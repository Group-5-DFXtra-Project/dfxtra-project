import { useState } from 'react';
import { submitExp } from '../../utils/DataServices.js';

function ExperienceForm({ setIsExperienceForm, getProfileInfo }) {
	const [experienceFormInput, setExperienceFormInput] = useState({ employerName: '', employerImage: '', position: '', description: '', startDate: '', endDate: '' });

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await submitExp(experienceFormInput);
			console.log(response);
			setIsExperienceForm(false);
			getProfileInfo();
			return response;
		} catch (e) {
			return { error: e.code, errorMessage: e.message };
		}
	};

	const handleChange = (e) => {
		setExperienceFormInput({ ...experienceFormInput, [e.target.name]: e.target.value });
	};

	return (
		<form onSubmit={handleSubmit}>
			<h4>Add an Experience:</h4>
			<div className="form-group">
				<label htmlFor="employerName">Employer Name:</label>
				<input type="text" name="employerName" value={experienceFormInput.employerName} onChange={handleChange} className="form-control" />
			</div>

			<div className="form-group">
				<label htmlFor="employerImage">Employer Image:</label>
				<input type="text" name="employerImage" value={experienceFormInput.employerImage} onChange={handleChange} className="form-control" />
			</div>
			<div className="form-group">
				<label htmlFor="position">Position:</label>
				<input type="text" name="position" value={experienceFormInput.position} onChange={handleChange} className="form-control" />
			</div>
			<div className="form-group">
				<label htmlFor="description">Description:</label>
				<input type="text" name="description" value={experienceFormInput.description} onChange={handleChange} className="form-control" />
			</div>
			<div className="form-group">
				<label htmlFor="startDate">Start Date:</label>
				<input type="text" name="startDate" value={experienceFormInput.startDate} onChange={handleChange} className="form-control" />
			</div>
			<div className="form-group">
				<label htmlFor="endDate">End Date:</label>
				<input type="text" name="endDate" value={experienceFormInput.endDate} onChange={handleChange} className="form-control" />
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
			<button className="btn btn-danger" onClick={() => setIsExperienceForm(false)}>
				Close
			</button>
		</form>
	);
}

export default ExperienceForm;
