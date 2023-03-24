import React, { useState } from 'react';
import { logIn } from '../../utils/authServices';
import Signup from '../Signup/Signup.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import loginImage from '../images/dfx-signin-pic.png';
import '../styles/Login.css';

const Login = () => {
	const [logInFormData, setLogInFormData] = useState({ email: '', password: '' });
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
		if (isSignUpForm === false) {
			setIsSignUpForm(true);
		}
		if (isSignUpForm === true) {
			setIsSignUpForm(false);
		}
	};

	return (
		<>
			<div className="sidenav">
				<img src={loginImage} alt="dfx people" />
			</div>
			<div className="main">
				<div className="col-md-6 col-sm-12">
					{!isSignUpForm && (
						<div className="login-form">
							<h3>Sign In</h3>
							<form onSubmit={logInSubmitHandler}>
								<div className="form-group">
									<label>Email: </label>
									<br />
									<input type="email" name="email" id="email" placeholder="Enter your email" onChange={logInChangeHandler} />
								</div>
								<div className="form-group">
									<label>Password: </label>
									<br />
									<input type="password" name="userPassword" id="userPassword" placeholder="Enter a password" onChange={logInChangeHandler} />
								</div>

								<button type="submit" className="btn btn-primary">
									Log In
								</button>
							</form>
						</div>
					)}
					{isSignUpForm && <Signup />}
				</div>
				<div className="signup-btn">
					<button type="submit" onClick={showSignUpForm} className="btn btn-primary">
						{isSignUpForm ? 'Back to Log In' : 'Sign Up'}
					</button>
				</div>
			</div>
		</>
	);
};

export default Login;
