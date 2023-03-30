// Testing for App component

// imports
import { render, screen } from '@testing-library/react';
import App from '../App.js';

jest.mock('../utils/authServices.js');

describe('Testing the App Component', () => {
	test('should render the Login Component on first render', () => {
		// Arrange
		// Act
		render(<App />);
		// Assert
		expect(screen.getAllByText(/sign in/i)).toBeInTheDocument();
	});
});
