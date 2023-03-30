// Testing for App component

// imports
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from '../App.js';

jest.mock('../utils/authServices.js');

describe('Testing the App Component', () => {
	test('should render the Login Component on first render', () => {
		// Arrange
		// Act
		render(<App />);
		// Assert
		expect(screen.getByText(/sign in/i)).toBeInTheDocument();
		expect(screen.getByText(/Email/i)).toBeInTheDocument();
		expect(screen.getByText(/Password/i)).toBeInTheDocument();
		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});
	test('should switch to the register form when user clicks sign up', () => {
		render(<App />);

		const submitButton = screen.getByTitle('signup-button');
		act(() => {
			fireEvent.click(submitButton);
		});
		const expected = screen.getAllByText(/sign up/i);
		expect(expected[0]).toBeInTheDocument();
	});
});
