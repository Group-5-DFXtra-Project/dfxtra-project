/* eslint-disable testing-library/no-unnecessary-act */
// Testing for Login in Component

// imports
import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../components/Login/Login.jsx';

jest.mock('../utils/authServices.js');

describe('Testing Login Component', () => {
	xtest('should call submitHandler when log in button is clicked', () => {
		const getProfileMock = jest.fn(() => {});
		const logInSubmitHandlerMock = jest.fn();

		render(
			<BrowserRouter>
				<Login getProfileInfo={getProfileMock} />
			</BrowserRouter>
		);
		const input1 = screen.getByPlaceholderText('Enter your email');
		const input2 = screen.getByPlaceholderText('Enter a password');
		const submitButton = screen.getByTitle('login-button');

		act(() => {
			userEvent.type(input1, 'j@j');
			userEvent.type(input2, 'j');
		});

		act(() => {
			userEvent.click(submitButton);
		});

		expect(logInSubmitHandlerMock).toHaveBeenCalledTimes(1);
	});
});
