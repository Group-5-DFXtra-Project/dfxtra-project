import { useState } from 'react';
import { submitQual } from '../../utils/DataServices.js';

function QualificationForm({ setIsQualificationForm, getProfileInfo }) {
	const [qualificationFormInput, setQualificationFormInput] = useState({ qualName: '', qualImage: '', qualLevel:'', qualSubject:'' });

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await submitQual(qualificationFormInput);
			console.log(response);
			setIsQualificationForm(false);
			getProfileInfo();
			return response;
		} catch (e) {
			return { error: e.code, errorMessage: e.message };
		}
	};

	const handleChange = (e) => {
		setQualificationFormInput({ ...qualificationFormInput, [e.target.name]: e.target.value });
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="qualName">Institution:</label>
				<input type="text" name="qualName" value={qualificationFormInput.qualName} onChange={handleChange} className="form-control" />
			</div>

			<div className="form-group">
				<label htmlFor="qualImage">Image:</label>
				<input type="text" name="qualImage" value={qualificationFormInput.qualImage} onChange={handleChange} className="form-control" />
			</div>
			<div className="form-group">
				<label htmlFor="qualLevel">Qualification Level:</label>
				<input type="text" name="qualLevel" value={qualificationFormInput.qualLevel} onChange={handleChange} className="form-control" />
			</div>
			<div className="form-group">
				<label htmlFor="qualSubject">Subject:</label>
				<input type="text" name="qualSubject" value={qualificationFormInput.qualSubject} onChange={handleChange} className="form-control" />
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
}

export default QualificationForm;
