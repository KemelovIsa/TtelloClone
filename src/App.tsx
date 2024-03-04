import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../src/pages/login/Login";
import Home from "./pages/home/Home";

const App: FC = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</>
	);
};

export default App;
