import axios from 'axios';

const URL = `${process.env.REACT_APP_DFXTRA}/api/`;

// get token from local storage
export const getToken = () => {
	return localStorage.getItem('token');
};

// function to submit a certification
export const submitCert = async (formData) => {
	const token = getToken();
	try {
		const response = await axios.put(URL + 'profile/certifications', formData, { headers: { Authorization: token } });
		return response.data;
	} catch (e) {
		return { error: e.code, errorMessage: e.message };
	}
};

// function to submit a qualification
export const submitQual = async (formData) => {
	const token = getToken();
	try {
		const response = await axios.put(URL + 'profile/qualifications', formData, { headers: { Authorization: token } });
		return response.data;
	} catch (e) {
		return { error: e.code, errorMessage: e.message };
	}
};

// function to submit an experience
export const submitExp = async (formData) => {
	const token = getToken();
	try {
		const response = await axios.put(URL + 'profile/experience', formData, { headers: { Authorization: token } });
		return response.data;
	} catch (e) {
		return { error: e.code, errorMessage: e.message };
	}
};

// function to update user header
export const updateProfileHeader = async (formData) => {
	const token = getToken();
	try {
		const response = await axios.put(URL + 'profile/profileheader', formData, { headers: { Authorization: token } });

		return response.data;
	} catch (e) {
		return { error: e.code, errorMessage: e.message };
	}
};

// function to get profile info
export const getProfileInfo = async () => {
	try {
		const token = getToken();
		const res = await axios.get(URL + `profile`, { headers: { Authorization: token } });
		return { profileInfo: res.data[0], status: res.status };
	} catch (e) {
		return {
			profileInfo: {},
			status: 204,
			error: {
				type: `get`,
				message: `Data not available`,
			},
		};
	}
};
