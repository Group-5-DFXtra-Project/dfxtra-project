import React, { useState } from "react";
import { logIn } from "../../utils/DataServices.js";
import Signup from "../Signup/Signup.jsx";
const Login = () => {
	const [logInFormData, setLogInFormData] = useState({ email: "", password: "" });
	const [isSignUpForm, setIsSignUpForm] = useState(false);
	const logInChangeHandler = (e) => {
		setLogInFormData({ ...logInFormData, [e.target.name]: e.target.value });
	};

	const logInSubmitHandler = async (e) => {
		e.preventDefault();
		try {
			await logIn(logInFormData);
            //redirect to profile page needed here
		} catch (err) {
			return { error: err.message };
		}
	};

    const showSignUpForm = () => {
        if (isSignUpForm === false) {setIsSignUpForm(true)}
        if (isSignUpForm === true) {setIsSignUpForm(false)}
    }

	return (
		<> <button type="submit" onClick={showSignUpForm}>{isSignUpForm ? "Back to Log In" : "Sign Up"}</button>
			{!isSignUpForm && (
				<form onSubmit={logInSubmitHandler}>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter your email"
						onChange={logInChangeHandler}
					/>
					<input
						type="password"
						name="userPassword"
						id="userPassword"
						placeholder="Enter a password"
						onChange={logInChangeHandler}
					/>
					<button type="submit">Log In</button>
				</form>  
			)}
            {isSignUpForm && <Signup/>
            }

		</>
	);
};

export default Login;
