import axios from "axios";

const URL = 'http://localhost:5000/';

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
        localStorage.setItem("token", response.data.token)
		return response.data;
	} catch (e) {
		return { error: e.code, errorMessage: e.message };
	}
};