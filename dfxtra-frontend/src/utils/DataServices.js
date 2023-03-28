import axios from 'axios';

const URL = 'http://localhost:8000/api/';

export const getToken = () => {
	return localStorage.getItem('token');
};

export const submitCert = async (certName) => {
	const token = getToken();
	try {
		const response = await axios.put(URL + 'profile/certifications', { content: certName }, { headers: { Authorization: token } });
		return response.data;
	} catch (e) {
		return { error: e.code, errorMessage: e.message };
	}
};

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
