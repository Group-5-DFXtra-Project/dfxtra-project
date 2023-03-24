import axios from "axios";

const URL = "http://localhost:8000/api/";

export const getToken = () => {
	return localStorage.getItem("token");
};

export const submitCert = async (certName) => {
	const token = getToken();
	try {
		const response = await axios.post(
			URL+"certificate",
			{ content: certName },
			{ headers: { Authorization: token } }
		);
		return response.data;
	} catch (e) {
		return { error: e.code, errorMessage: e.message };
	}
};
