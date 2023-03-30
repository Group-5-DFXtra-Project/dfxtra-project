// Testing for App component

// imports
import userEvent from "@testing-library/user-event";
import { render, screen, fireEvent, act } from "@testing-library/react";
import App from "../App.js";
import { BrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login.jsx";

jest.mock("../utils/authServices.js");

describe("Testing the App Component", () => {
	test("should render the Login Component on first render", () => {
		// Arrange
		// Act
		render(<App />);
		// Assert
		expect(screen.getByText(/sign in/i)).toBeInTheDocument();
		expect(screen.getByText(/Email/i)).toBeInTheDocument();
		expect(screen.getByText(/Password/i)).toBeInTheDocument();
		expect(screen.getByRole("textbox")).toBeInTheDocument();
	});
	test("should switch to the register form when user clicks sign up", () => {
		render(<App />);

		const submitButton = screen.getByTitle("signup-button");
		act(() => {
			fireEvent.click(submitButton);
		});
		const expected = screen.getAllByText(/sign up/i);
		expect(expected[0]).toBeInTheDocument();
	});

	test("should call submitHandler when log in button is clicked", async () => {
		const logInSubmitHandler = jest.fn();

		render(<BrowserRouter><App /></BrowserRouter>);
		const input1 = screen.getByPlaceholderText("Enter your email");
		const input2 = screen.getByPlaceholderText("Enter a password")

		const submitButton = screen.getByTitle("login-button");
		act(() => {
			userEvent.type(input1, "user@example.com");
		});
		act(() => {
			userEvent.type(input2, "password");
		});

		act(() => {
			userEvent.click(submitButton);
		});
		await expect(logInSubmitHandler).toHaveBeenCalledTimes(1);
	});
});
