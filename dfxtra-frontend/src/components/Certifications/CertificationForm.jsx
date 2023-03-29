import { useState } from 'react';
import { submitCert } from '../../utils/DataServices.js';

function CertificationForm({ setIsCertificationForm, getProfileInfo }) {
	const [certificationFormInput, setCertificationFormInput] = useState({ certName: '', certImage: '' });

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await submitCert(certificationFormInput);
			console.log(response);
			setIsCertificationForm(false);
			getProfileInfo();
			return response;
		} catch (e) {
			return { error: e.code, errorMessage: e.message };
		}
	};

	const handleChange = (e) => {
		setCertificationFormInput({ ...certificationFormInput, [e.target.name]: e.target.value });
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="certName">Certification:</label>
				<input type="text" name="certName" value={certificationFormInput.certName} onChange={handleChange} className="form-control" />
			</div>

			<div className="form-group">
				<label htmlFor="certImage">Image:</label>
				<input type="text" name="certImage" value={certificationFormInput.certImage} onChange={handleChange} className="form-control" />
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
			<button className="btn btn-danger" onClick={() => setIsCertificationForm(false)}>
				Close
			</button>
		</form>
	);
}

export default CertificationForm;
