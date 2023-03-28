import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./components/Login/Login.jsx";
import Main from "./components/Main/Main.jsx";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/profile" element={<Main />} />
          <Route path="/" element={<Login />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
