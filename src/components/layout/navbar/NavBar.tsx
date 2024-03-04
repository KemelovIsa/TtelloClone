import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
	padding: 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.loader {
		width: 28px;
		height: 28px;
		position: relative;
		margin-left: 20px;
	}

	.loader:before {
		content: "";
		width: 28px;
		height: 5px;
		background: #ea0909;
		position: absolute;
		left: 0;
		border-radius: 50%;
		animation: shadow324 0.5s linear infinite;
	}

	.loader:after {
		content: "";
		width: 100%;
		height: 100%;
		background: rgb(255, 0, 251);
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 4px;
		animation: jump7456 0.5s linear infinite;
	}

	@keyframes jump7456 {
		15% {
			border-bottom-right-radius: 3px;
		}

		25% {
			transform: translateY(9px) rotate(22.5deg);
		}

		50% {
			transform: translateY(18px) scale(1, 0.9) rotate(45deg);
			border-bottom-right-radius: 40px;
		}

		75% {
			transform: translateY(9px) rotate(67.5deg);
		}

		100% {
			transform: translateY(0) rotate(90deg);
		}
	}

	@keyframes shadow324 {
		0%,
		100% {
			transform: scale(1, 1);
		}

		50% {
			transform: scale(1.2, 1);
		}
	}
`;

const NavButton = styled.h4`
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 15px;
	padding-left: 20px;

	& img {
		width: 20px;
		height: 20px;
		margin-right: 10px;
	}
`;

const NavButtom = styled.h4`
	cursor: pointer;
	border: none;

	display: flex;
	align-items: center;
	justify-content: center;
	padding-left: 20px;

	& img {
		width: 20px;
		height: 20px;
		margin-right: 10px;
	}
`;

const NavbarContainerTwo = styled.div`
	padding: 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;
`;

const NavButtomOne = styled.h4`
	cursor: pointer;
	border: none;

	display: flex;
	align-items: center;
	justify-content: center;

	& img {
		width: 20px;
		height: 20px;
		margin-right: 10px;
		margin-left: 10px;
	}
`;

const NavButtomTwo = styled.h4`
	cursor: pointer;
	border: none;

	display: flex;
	align-items: center;
	justify-content: center;
	& img {
		width: 20px;
		height: 20px;
		margin-right: 10px;
		margin-left: 10px;
	}
`;

const NavButtomThree = styled.h4`
	cursor: pointer;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-left: 20px;

	& img {
		width: 20px;
		height: 20px;
		margin-right: 10px;
	}
`;
const Navba = styled.div`
	background-color: #08088b5c;
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 60px;
	color: aquamarine;

	.center {
		position: absolute;
		transform: translateX(-50%);
		left: 50%;
	}

	.container {
		height: 31.25em;
		width: 21.87em;
		margin-top: -325px;
	}

	.rope {
		height: 13.62em;
		width: 0.15em;
		background-color: #ffffff;
		animation: swing 2s infinite;
	}

	@keyframes swing {
		50% {
			transform: translateY(-4em);
		}
	}

	.legs {
		height: 1.12em;
		width: 7.5em;
		background-color: transparent;
		box-shadow: 0 0 0 0.12em #140243, 0 0 0 1.06em #1b1676, 0 0 0 1.18em #140243;
		top: 12.5em;
		border-radius: 3.12em;
	}

	.boot-l,
	.boot-r {
		height: 1.25em;
		width: 2.5em;
		background-color: #000000;
		position: absolute;
		border: 0.12em solid #140243;
		bottom: 1.12em;
	}

	.boot-l {
		left: 1em;
	}

	.boot-r {
		transform: rotateY(180deg);
		left: 3.81em;
	}

	.boot-l:before,
	.boot-r:before {
		content: "";
		position: absolute;
		width: 0;
		height: 0;
		border-bottom: 1.12em solid #140243;
		border-left: 1.18em solid transparent;
		bottom: 1.31em;
		left: 1.46em;
	}

	.boot-l:after,
	.boot-r:after {
		content: "";
		position: absolute;
		width: 0;
		height: 0;
		border-bottom: 1.12em solid #e32832;
		border-left: 1em solid transparent;
		right: 0;
		top: -0.93em;
	}

	.costume {
		height: 6.25em;
		width: 5.62em;
		background: linear-gradient(
			to right,
			#1b1676 20%,
			#000000 20%,
			#000000 80%,
			#1b1676 80%
		);
		border: 0.12em solid #140243;
		top: 14.68em;
	}

	.spider {
		height: 1.87em;
		width: 0.93em;
		background-color: #140243;
		border-radius: 45%;
		position: absolute;
		transform: translate(-50%, -50%);
		top: calc(50% + 0.93em);
		left: 50%;
	}

	.s1,
	.s3 {
		height: 7.5em;
		width: 2.5em;
		border-radius: 0 0 1.37em 1.37em;
		border-bottom: 0.12em solid #140243;
		position: absolute;
	}

	.s2,
	.s4 {
		height: 7.5em;
		width: 3.12em;
		border-radius: 0 0 1.56em 1.56em;
		border-bottom: 0.12em solid #140243;
		position: absolute;
	}

	.s1,
	.s2,
	.s3,
	.s4 {
		left: 50%;
	}

	.s1 {
		bottom: 1.43em;
	}

	.s2 {
		bottom: 0.93em;
	}

	.s3,
	.s4 {
		transform: translateX(-50%) rotateX(180deg);
	}

	.s3 {
		top: 1.43em;
	}

	.s4 {
		top: 0.93em;
	}

	.belt {
		height: 0.43em;
		width: 5.87em;
		background-color: #000000;
		border: 0.12em solid #140243;
		top: -0.12em;
	}

	.hand-r,
	.hand-l {
		height: 8.12em;
		background: linear-gradient(
			#000000 4.6em,
			#140243 4.6em,
			#140243 4.75em,
			#1b1676 4.75em,
			#1b1676 8.12em
		);
		width: 1.12em;
		border: 0.12em solid #140243;
		border-radius: 1.25em;
		position: absolute;
		transform-origin: bottom;
		bottom: -0.12em;
	}

	.hand-r {
		right: -0.75em;
		transform: rotate(-22deg);
	}

	.hand-l {
		left: -0.75em;
		transform: rotate(22deg);
	}

	.neck {
		height: 0.37em;
		width: 1.25em;
		background-color: #000000;
		bottom: -0.62em;
		border: 0.12em solid #140243;
	}

	.mask {
		height: 4.65em;
		width: 4.06em;
		background-color: #000000;
		border-radius: 50% 50% 50% 50% / 54% 54% 46% 46%;
		border: 0.12em solid #140243;
		top: 6.56em;
	}

	.eye-l,
	.eye-r {
		height: 0.68em;
		width: 1.37em;
		background-color: #ffffff;
		border-radius: 1.37em 1.37em 0 0;
		border: 0.12em solid #140243;
		position: absolute;
		top: 2.1em;
	}

	.eye-l {
		left: 0.3em;
	}

	.eye-r {
		right: 0.3em;
	}

	.cover {
		height: 3.12em;
		width: 0.15em;
		background-color: #ffffff;
		bottom: 8.12em;
	}

	@media screen and (min-width: 600px) {
		.container {
			font-size: 20px;
		}
	}
`;

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
	return (
		<Navba>
			<NavbarContainer>
				<h3>JS 12</h3>
				<div className="loader"></div>
				<NavButton>
					<img src="src/assets/users.png" alt="люди" />
					Для рабочего пространства
				</NavButton>
				<NavButtom>
					<h4>
						<img src="src/assets/layout-cards.png" alt="полоса" />
						По доске
					</h4>
				</NavButtom>
			</NavbarContainer>
			<div className="container center">
				<div className="rope center">
					<div className="legs center">
						<div className="boot-l"></div>
						<div className="boot-r"></div>
					</div>
					<div className="costume center">
						<div className="spider">
							<div className="s1 center"></div>
							<div className="s2 center"></div>
							<div className="s3"></div>
							<div className="s4"></div>
						</div>
						<div className="belt center"></div>
						<div className="hand-r"></div>
						<div className="hand-l"></div>
						<div className="neck center"></div>
						<div className="mask center">
							<div className="eye-l"></div>
							<div className="eye-r"></div>
						</div>
						<div className="cover center"></div>
					</div>
				</div>
			</div>
			<NavbarContainerTwo>
				<NavButtomOne>
					<h4>
						<img src="src/assets/bell-ringing-2.png" alt="полоса" />
						Улучшение
					</h4>
				</NavButtomOne>
				<NavButtomTwo>
					<h4>
						<img src="src/assets/pngegg (18).png" alt="полоса" />
						Автоматизация
					</h4>
				</NavButtomTwo>
				<NavButtomThree>
					<h4>
						<img src="src/assets/list-tree.svg" alt="filter" />
						Фильтры
					</h4>
				</NavButtomThree>
			</NavbarContainerTwo>
		</Navba>
	);
};

export default Navbar;
