import axios from 'axios';
const URL = 'http://localhost:5000/';

export const submitCert = async (certName) => {
	try {
		const response = await axios.post(URL, certName);
		return response.data;
	} catch (e) {
		return { error: e.code, errorMessage: e.message };
	}
};

export const signUp = async (formData) => {
	try {
		const response = await axios.post(URL + 'signup', formData);
		return response.data;
	} catch (e) {
		return { error: e.code, errorMessage: e.message };
	}
};

export const logIn = async (formData) => {
	try {
		const response = await axios.post(URL + 'login', formData);
		return response.data;
	} catch (e) {
		return { error: e.code, errorMessage: e.message };
	}
};
