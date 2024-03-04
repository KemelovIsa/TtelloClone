import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import styled from "styled-components";

interface LoginResponse {
	status: number;
}

const Login: React.FC = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [_, setLoggedIn] = useState(false);

	const handleLogin = async () => {
		try {
			const response: AxiosResponse<LoginResponse> = await axios.post(
				"https://api.elchocrud.pro/api/v1/9aaac09e029329576d92152a5841c18d/users",
				{
					email: email,
					password: password,
				}
			);

			if (response.status === 200) {
				const users = JSON.parse(localStorage.getItem("users") || "[]");

				const currentUser = { email: email, password: password };

				users.push(currentUser);

				localStorage.setItem("users", JSON.stringify(users));

				localStorage.setItem("isLoggedIn", "true");
				setLoggedIn(true);
				navigate("/home");
			} else {
				console.error("Authentication failed");
			}
		} catch (error) {
			console.error("Error during authentication:", error);
		}
	};

	const ContainerSecond = styled.div`
		margin-top: 80px;
		.LoginPage {
			margin: 0 auto;
			display: flex;
			text-align: center;
			width: 500px;
			height: 570px;
			background: linear-gradient(
				85deg,
				rgb(0, 0, 0),
				#041c63,
				#c3c634,
				#e6e3e3
			);
			background-size: 400% 400%;
			animation: gradientAnimation 5s infinite;
			flex-direction: column;
			background-color: #f8f9fa;
		}
		@keyframes gradientAnimation {
			0% {
				background-position: 0% 50%;
			}
			25% {
				background-position: 25% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			75% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}
		.image {
			margin-left: 830px;
			height: 43px;
			margin-bottom: 30px;
		}
		input {
			margin-top: 20px;

			font-size: 14px;
			background-color: #fafbfc;
			border: 2px solid #dfe1e6;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			border-radius: 3px;
			height: 40px;
			width: 320px;
		}
		.prodoljit {
			margin-top: 20px;
			font-size: 16px;
			background-color: #5aac44;
			color: white;
			border: 2px solid #dfe1e6;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			border-radius: 3px;
			height: 40px;
			width: 320px;
		}
		p {
			font-size: 22px;
		}
		.google {
			width: 18px;
			height: 18px;
		}
		button {
			height: 40px;
			width: 320px;
			display: inline-block;
			vertical-align: middle;
			font-size: 14px;
			font-family: inherit;
			font-weight: bold;
			color: #505f79;
			height: 32px;
			line-height: 32px;
			margin-top: 10px;
		}
		.tri {
			display: flex;
			margin-left: 100px;
		}
		li {
			margin-left: 12px;
			margin-right: 2px;
		}
		a {
			list-style: none;
			text-decoration: none;
		}
		.chetyre {
			padding-top: 20px;
			display: flex;
			justify-content: center;
		}
	`;

	const Conteiner = styled.div`
		.sun {
			position: absolute;
			animation: rotate 4s linear infinite;
			--color: yellow;
			--scale: 0.4;
		}

		.center {
			height: calc(var(--scale) * 10em);
			width: calc(var(--scale) * 10em);
			background-color: var(--color);
			border-radius: 50%;
			box-shadow: 0 0 calc(var(--scale) * 3em) var(--color);
		}

		.ray {
			position: absolute;
			height: calc(var(--scale) * 3em);
			width: calc(var(--scale) * 0.5em);
			box-shadow: 0 0 calc(var(--scale) * 1em) var(--color);
			background-color: var(--color);
		}

		.r-1 {
			margin-left: calc(var(--scale) * 4.75em);
			margin-top: calc(var(--scale) * 1em);
		}

		.r-2 {
			margin-left: calc(var(--scale) * 12.25em);
			margin-top: calc(var(--scale) * -6.25em);
			transform: rotate(90deg);
		}

		.r-3 {
			margin-left: calc(var(--scale) * 4.75em);
			margin-top: calc(var(--scale) * -14em);
		}

		.r-4 {
			margin-left: calc(var(--scale) * -2.75em);
			margin-top: calc(var(--scale) * -6.25em);
			transform: rotate(90deg);
		}

		.r-5 {
			margin-left: calc(var(--scale) * -0.5em);
			margin-top: calc(var(--scale) * -1em);
			transform: rotate(45deg);
		}

		.r-6 {
			margin-left: calc(var(--scale) * 9.75em);
			margin-top: calc(var(--scale) * -1em);
			transform: rotate(-45deg);
		}

		.r-7 {
			margin-left: calc(var(--scale) * 10.25em);
			margin-top: calc(var(--scale) * -11.75em);
			transform: rotate(45deg);
		}

		.r-8 {
			margin-left: calc(var(--scale) * -0.5em);
			margin-top: calc(var(--scale) * -11.75em);
			transform: rotate(-45deg);
		}

		@keyframes rotate {
			0% {
				transform: rotate(0deg);
			}

			100% {
				transform: rotate(360deg);
			}
		}
	`;

	return (
		<>
			<Conteiner>
				<div className="sun">
					<div className="center"></div>
					<div className="ray r-1"></div>
					<div className="ray r-2"></div>
					<div className="ray r-3"></div>
					<div className="ray r-4"></div>
					<div className="ray r-5"></div>
					<div className="ray r-6"></div>
					<div className="ray r-7"></div>
					<div className="ray r-8"></div>
				</div>
			</Conteiner>
			<ContainerSecond>
				<img
					className="image"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/1920px-Trello-logo-blue.svg.png"
					alt=""
				/>
				<div className="LoginPage">
					<h3>Вход в Trello</h3>
					<div>
						<input
							type="email"
							placeholder="  Укажите email электронной почты"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div>
						<input
							type="password"
							placeholder="Укажите password электронной почты"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div>
						<button className="prodoljit" onClick={handleLogin}>
							Продолжить
						</button>
						<p>или</p>
						<button>
							<img
								className="google"
								src="src/assets/pngegg (9).png"
								alt="google"
							/>
							Войти через Google
						</button>
						<button>
							<img
								className="google"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
								alt="microsoft"
							/>
							Войти через Microsoft
						</button>
						<button>
							<img
								className="google"
								src="src/assets/pngegg (10).png"
								alt="apple"
							/>
							Войти через Apple
						</button>
						<button>
							<img
								className="google"
								src="src/assets/pngegg (12).png"
								alt="slack"
							/>
							Войти через Slack
						</button>
						<hr />
						<div className="tri">
							<a href="Не удается войти ?">Не удается войти ?</a>
							<li></li>
							<a href="Не удается войти ?">Зарегистрировать аккаунт</a>
						</div>
					</div>
				</div>
				<div className="chetyre">
					<a href="Не удается войти ?">Политика конфиденциальности</a>
					<li></li>
					<a href="Не удается войти ?">Условия использования</a>
				</div>
			</ContainerSecond>
		</>
	);
};

export default Login;
