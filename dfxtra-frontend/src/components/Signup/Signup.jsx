import React from 'react';

const Signup = () => {
	const signupSubmitHandler = () => {};

	const signupChangeHandler = () => {};

	return (
		<>
			<form onSubmit={signupSubmitHandler}>
				<input type="text" name="firstName" id="firstName" placeholder="Enter your First Name" onChange={signupChangeHandler} />
				<input type="text" name="lastName" id="lastName" placeholder="Enter your Last Name" onChange={signupChangeHandler} />
				<input type="email" name="email" id="email" placeholder="Enter your email" onChange={signupChangeHandler} />
				<input type="password" name="userPassword" id="userPassword" placeholder="Enter a password" onChange={signupChangeHandler} />
				<button type="submit">Sign Up</button>
			</form>
		</>
	);
};

export default Signup;
