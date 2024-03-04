import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Header from "./header/Header";

const Layout: React.FC = () => {
	return (
		<div>
			<Routes>
				<Header />
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</div>
	);
};

export default Layout;
