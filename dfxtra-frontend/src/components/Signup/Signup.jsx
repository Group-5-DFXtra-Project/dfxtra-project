import React, { useState } from "react";
import { signUp } from "../../utils/DataServices.js";

const Signup = () => {
	const [signUpFormData, setSignUpFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const signupChangeHandler = (e) => {
		setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
	};

	const signupSubmitHandler = async (e) => {
		e.preventDefault();
		try {
			await signUp(signUpFormData);
			alert("You've successfully signed up!");
		} catch (err) {
			return { error: err.message };
		}
	};

	return (
		<>
			<form onSubmit={signupSubmitHandler}>
				<input
					type="text"
					name="firstName"
					id="firstName"
					placeholder="Enter your First Name"
					onChange={signupChangeHandler}
				/>
				<input
					type="text"
					name="lastName"
					id="lastName"
					placeholder="Enter your Last Name"
					onChange={signupChangeHandler}
				/>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Enter your email"
					onChange={signupChangeHandler}
				/>
				<input
					type="password"
					name="userPassword"
					id="userPassword"
					placeholder="Enter a password"
					onChange={signupChangeHandler}
				/>
				<button type="submit">Sign Up</button>
			</form>
		</>
	);
};

export default Signup;
