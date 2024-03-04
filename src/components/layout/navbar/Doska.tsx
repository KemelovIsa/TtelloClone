import React from "react";
import styled from "styled-components";

const Dosska = styled.div`
	width: 350px;
	height: 100%;
	margin: 0;
	color: #fff;
	font-family: Arial, sans-serif;
	background: linear-gradient(85deg, rgb(0, 0, 0), #0b19b7, #0b19b7, #000000);
	animation: gradientAnimation 5s infinite;
	font-family: "Arial", sans-serif;
	background-color: #f8f9fa;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

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

	& img {
		width: 25px;
		height: 25px;
		border-radius: 10px;
		flex-direction: column;
		&.logo {
			width: 60px;
			height: 60px;
		}
	}
	p {
		font-family: "Courier New", Courier, monospace;
		font-style: inherit;
		font-size: 16px;
		font-weight: bold;
		outline: none;
		border-radius: 50%;
		transition: 0.5s ease-in-out;
		box-shadow: 0px 0px 3px #f3f3f3;
		border: 0.25em solid var(--glow-color);
		color: var(--glow-color);
		color: black;

		font-size: 15px;
		font-weight: bold;
		background-color: var(--btn-color);
		border-radius: 1em;
		outline: none;
		box-shadow: 0 0 1em 0.25em var(--glow-color),
			0 0 4em 1em var(--glow-spread-color),
			inset 0 0 0.75em 0.25em var(--glow-color);
		text-shadow: 0 0 0.5em var(--glow-color);
		--glow-color: rgb(176, 252, 255);
		--glow-spread-color: rgba(123, 251, 255, 0.781);
		--enhanced-glow-color: rgb(206, 255, 255);
		--btn-color: rgb(61, 127, 136);
	}
	h3 {
		font-family: "Courier New", Courier, monospace;
		font-size: 16px;
		font-weight: bold;
		font-style: inherit;
		outline: none;
		border-radius: 50%;
		transition: 0.5s ease-in-out;
		box-shadow: 0px 0px 3px #f3f3f3;
		border: 0.25em solid var(--glow-color);
		color: var(--glow-color);
		color: black;

		font-size: 15px;
		font-weight: bold;
		background-color: var(--btn-color);
		border-radius: 1em;
		outline: none;
		box-shadow: 0 0 1em 0.25em var(--glow-color),
			0 0 4em 1em var(--glow-spread-color),
			inset 0 0 0.75em 0.25em var(--glow-color);
		text-shadow: 0 0 0.5em var(--glow-color);
		--glow-color: rgb(176, 252, 255);
		--glow-spread-color: rgba(123, 251, 255, 0.781);
		--enhanced-glow-color: rgb(206, 255, 255);
		--btn-color: rgb(61, 127, 136);
	}
	h4 {
		font-family: "Courier New", Courier, monospace;
		font-size: 16px;
		font-style: inherit;
		font-weight: bold;
		outline: none;
		border-radius: 50%;
		transition: 0.5s ease-in-out;
		box-shadow: 0px 0px 3px #f3f3f3;
		border: 0.25em solid var(--glow-color);
		color: var(--glow-color);
		color: black;
		font-size: 15px;
		font-weight: bold;
		background-color: var(--btn-color);
		border-radius: 1em;
		outline: none;
		box-shadow: 0 0 1em 0.25em var(--glow-color),
			0 0 4em 1em var(--glow-spread-color),
			inset 0 0 0.75em 0.25em var(--glow-color);
		text-shadow: 0 0 0.5em var(--glow-color);
		--glow-color: rgb(176, 252, 255);
		--glow-spread-color: rgba(123, 251, 255, 0.781);
		--enhanced-glow-color: rgb(206, 255, 255);
		--btn-color: rgb(61, 127, 136);
	}
	&.trello {
		width: 60px;
		height: 60px;
		border-radius: 10px;
	}
	& .italy {
		font-style: Italic;
	}
	& div {
		display: flex;
		gap: 30px;
		align-items: center;
	}
	h5 {
		font-style: italic;
		color: black;
	}
	.loader {
		display: block;
		width: 9em;
		height: 9em;
		overflow: visible;
	}

	.loader path.fill {
		fill: #2af2;
		animation: fill 4s ease-in-out infinite;
	}

	.loader .dash path {
		stroke: #2af;
		stroke-width: 1px;
		stroke-linecap: round;
		animation: dashArray var(--sped, 2s) ease-in-out infinite,
			dashOffset var(--sped, 2s) linear infinite;
	}

	.loader .dash path.aaa {
		stroke-width: 2px;
		stroke-linecap: butt;
		clip-path: path(
			"M 20.4603 48.5493 L 16.6461 46.9584 C 17.3209 48.3794 18.4917 49.5682 20.0447 50.2206 C 23.4007 51.6328 27.2707 50.0262 28.6694 46.6367 C 29.3464 44.9966 29.3509 43.1867 28.6806 41.5422 C 28.0103 39.8977 26.7434 38.6151 25.119 37.9315 C 23.5035 37.2544 21.7741 37.279 20.2547 37.8576 L 24.1961 39.5022 C 26.6719 40.5434 27.8427 43.4124 26.8104 45.9105 C 25.7803 48.4085 22.936 49.5905 20.4603 48.5493 Z"
		);
	}

	.loader .dash path.big {
		stroke-width: 2px;
		filter: drop-shadow(0 0 2px #2af);
	}

	@keyframes dashArray {
		0% {
			stroke-dasharray: 0 1 359 0;
		}

		50% {
			stroke-dasharray: 0 359 1 0;
		}

		100% {
			stroke-dasharray: 359 1 0 0;
		}
	}

	@keyframes dashOffset {
		0% {
			stroke-dashoffset: -5;
		}

		100% {
			stroke-dashoffset: -365;
		}
	}

	@keyframes fill {
		30%,
		55% {
			fill: #2af0;
		}
	}
`;

interface NavbarProps {}

const Doska: React.FC<NavbarProps> = () => {
	return (
		<Dosska>
			<div>
				<svg
					viewBox="0 0 64 64"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="loader">
					<g className="dash">
						<path
							pathLength="360"
							d="M 31.9463 1 C 15.6331 1 2.2692 13.6936 1 29.8237 L 17.644 36.7682 C 19.0539 35.794 20.7587 35.2264 22.5909 35.2264 C 22.7563 35.2264 22.9194 35.231 23.0803 35.2399 L 30.4828 24.412 L 30.4828 24.2601 C 30.4828 17.7446 35.7359 12.4423 42.1933 12.4423 C 48.6507 12.4423 53.9038 17.7446 53.9038 24.2601 C 53.9038 30.7756 48.6507 36.08 42.1933 36.08 C 42.104 36.08 42.0168 36.0778 41.9275 36.0755 L 31.3699 43.6747 C 31.3766 43.8155 31.3811 43.9562 31.3811 44.0947 C 31.3811 48.9881 27.4374 52.9675 22.5909 52.9675 C 18.3367 52.9675 14.7773 49.902 13.9729 45.8443 L 2.068 40.8772 C 5.7548 54.0311 17.7312 63.6748 31.9463 63.6748 C 49.0976 63.6748 63 49.6428 63 32.3374 C 63 15.0297 49.0976 1 31.9463 1 Z"
							className="big"></path>
						<path
							pathLength="360"
							d="M 20.4603 48.5493 L 16.6461 46.9584 C 17.3209 48.3794 18.4917 49.5682 20.0447 50.2206 C 23.4007 51.6328 27.2707 50.0262 28.6694 46.6367 C 29.3464 44.9966 29.3509 43.1867 28.6806 41.5422 C 28.0103 39.8977 26.7434 38.6151 25.119 37.9315 C 23.5035 37.2544 21.7741 37.279 20.2547 37.8576 L 24.1961 39.5022 C 26.6719 40.5434 27.8427 43.4124 26.8104 45.9105 C 25.7803 48.4085 22.936 49.5905 20.4603 48.5493 Z"
							className="aaa"></path>
						<path
							pathLength="360"
							d="M 49.9968 24.2603 C 49.9968 19.9188 46.4954 16.384 42.1943 16.384 C 37.8908 16.384 34.3894 19.9188 34.3894 24.2603 C 34.3894 28.6017 37.8908 32.1343 42.1943 32.1343 C 46.4954 32.1343 49.9968 28.6017 49.9968 24.2603 Z"></path>
						<path
							pathLength="360"
							d="M 36.3446 24.2469 C 36.3446 20.9802 38.97 18.3324 42.2054 18.3324 C 45.4431 18.3324 48.0685 20.9802 48.0685 24.2469 C 48.0685 27.5135 45.4431 30.1613 42.2054 30.1613 C 38.97 30.1613 36.3446 27.5135 36.3446 24.2469 Z"></path>
					</g>
					<path
						pathLength="360"
						d="M 31.9463 1 C 15.6331 1 2.2692 13.6936 1 29.8237 L 17.644 36.7682 C 19.0539 35.794 20.7587 35.2264 22.5909 35.2264 C 22.7563 35.2264 22.9194 35.231 23.0803 35.2399 L 30.4828 24.412 L 30.4828 24.2601 C 30.4828 17.7446 35.7359 12.4423 42.1933 12.4423 C 48.6507 12.4423 53.9038 17.7446 53.9038 24.2601 C 53.9038 30.7756 48.6507 36.08 42.1933 36.08 C 42.104 36.08 42.0168 36.0778 41.9275 36.0755 L 31.3699 43.6747 C 31.3766 43.8155 31.3811 43.9562 31.3811 44.0947 C 31.3811 48.9881 27.4374 52.9675 22.5909 52.9675 C 18.3367 52.9675 14.7773 49.902 13.9729 45.8443 L 2.068 40.8772 C 5.7548 54.0311 17.7312 63.6748 31.9463 63.6748 C 49.0976 63.6748 63 49.6428 63 32.3374 C 63 15.0297 49.0976 1 31.9463 1 Z"
						fill="#212121"></path>
					<path
						className="fill"
						pathLength="360"
						d="M 31.9463 1 C 15.6331 1 2.2692 13.6936 1 29.8237 L 17.644 36.7682 C 19.0539 35.794 20.7587 35.2264 22.5909 35.2264 C 22.7563 35.2264 22.9194 35.231 23.0803 35.2399 L 30.4828 24.412 L 30.4828 24.2601 C 30.4828 17.7446 35.7359 12.4423 42.1933 12.4423 C 48.6507 12.4423 53.9038 17.7446 53.9038 24.2601 C 53.9038 30.7756 48.6507 36.08 42.1933 36.08 C 42.104 36.08 42.0168 36.0778 41.9275 36.0755 L 31.3699 43.6747 C 31.3766 43.8155 31.3811 43.9562 31.3811 44.0947 C 31.3811 48.9881 27.4374 52.9675 22.5909 52.9675 C 18.3367 52.9675 14.7773 49.902 13.9729 45.8443 L 2.068 40.8772 C 5.7548 54.0311 17.7312 63.6748 31.9463 63.6748 C 49.0976 63.6748 63 49.6428 63 32.3374 C 63 15.0297 49.0976 1 31.9463 1 Z"></path>
				</svg>
			</div>
			<div>
				<h5>
					Рабочее пространство <br />
					Trello
					<br />
					<h3>Бесплатно</h3>
				</h5>
			</div>
			<div>
				<img src="src/assets/table.png" alt="" />
				<p>Доски</p>
			</div>
			<div>
				<img src="src/assets/user.png" alt="" />
				<p>Участники</p>
			</div>
			<div>
				<img src="src/assets/settings.png" alt="" />
				<h4>
					Настройки <br /> рабочего <br />
					пространства
				</h4>
			</div>
			<div>
				<h4>
					Режимы просмотра <br />
					рабочего пространства
				</h4>
			</div>
			<div>
				<img src="src/assets/table.png" alt="" />
				<h4 className="italy">Таблица</h4>
			</div>
			<div>
				<img src="src/assets/calendar-smile.png" alt="" />
				<h4 className="italy">Календарь</h4>
			</div>
			<div>
				<h4>Мои доски</h4>
			</div>
			<div>
				<h3>JS 12</h3>
			</div>
		</Dosska>
	);
};

export default Doska;
