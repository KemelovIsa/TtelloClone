import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Header from "../../components/layout/header/Header";
import Navbar from "../../components/layout/navbar/NavBar";
import {
	patchRequest,
	postRequest,
	getRequest,
	deleteRequest,
	// putRequest,
} from "../../redux/tools/TaskCardSlice";
import Doska from "../../components/layout/navbar/Doska";
import styled from "styled-components";

const Three = styled.div`
	display: flex;
`;

const Fore = styled.div`
	width: auto;
	height: 100%;
	max-width: 100%;
	max-height: 500px;
	min-width: 320px;
	background-color: #000000;
	border-radius: 30px;
	text-align: center;
	color: aqua;
	display: block;
	text-align: center;
	margin-left: 100px;
	margin-top: 20px;
	& input {
		width: 180px;
		height: 30px;
		padding: 5px;
		box-sizing: border-box;
		border-radius: 15px;
	}

	.plusButton {
		--plus_sideLength: 1.5rem;
		--plus_topRightTriangleSideLength: 0.9rem;
		position: relative;
		justify-content: center;
		align-items: center;
		width: var(--plus_sideLength);
		height: var(--plus_sideLength);
		background-color: #000000;
		overflow: hidden;
	}

	.plusButton::before {
		position: absolute;
		content: "";
		top: 0;
		right: 0;
		width: 0;
		height: 0;
		border-width: 0 var(--plus_topRightTriangleSideLength)
			var(--plus_topRightTriangleSideLength) 0;
		border-style: solid;
		border-color: transparent white transparent transparent;
		transition-timing-function: ease-in-out;
		transition-duration: 0.2s;
	}

	.plusButton:hover {
		cursor: pointer;
	}

	.plusButton:hover::before {
		--plus_topRightTriangleSideLength: calc(var(--plus_sideLength) * 2);
	}

	.plusButton:focus-visible::before {
		--plus_topRightTriangleSideLength: calc(var(--plus_sideLength) * 2);
	}

	.plusButton > .plusIcon {
		fill: white;
		width: calc(var(--plus_sideLength) * 0.7);
		height: calc(var(--plus_sideLength) * 0.7);
		z-index: 1;
		transition-timing-function: ease-in-out;
		transition-duration: 0.2s;
	}

	.plusButton:hover > .plusIcon {
		fill: black;
		transform: rotate(180deg);
	}

	.plusButton:focus-visible > .plusIcon {
		fill: black;
		transform: rotate(180deg);
	}
	button {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1em;
		border: 0px solid transparent;
		background-color: rgba(113, 111, 123, 0.08);
		border-radius: 1.25em;
		transition: all 0.2s linear;
		color: aquamarine;
	}

	button:hover {
		box-shadow: 3.4px 2.5px 4.9px rgba(0, 0, 0, 0.025),
			8.6px 6.3px 12.4px rgba(0, 0, 0, 0.035),
			17.5px 12.8px 25.3px rgba(0, 0, 0, 0.045),
			36.1px 26.3px 52.2px rgba(0, 0, 0, 0.055),
			99px 72px 143px rgba(0, 0, 0, 0.08);
	}

	.tooltip {
		position: relative;
		display: inline-block;
		background-color: aqua;
		width: 20px;
		height: 20px;
	}

	.tooltip .tooltiptext {
		visibility: hidden;
		width: 3em;
		background-color: rgba(0, 0, 0, 0.253);
		color: #fff;
		text-align: center;
		border-radius: 6px;
		padding: 5px 0;
		z-index: 1;
	}

	.tooltip .tooltiptext::after {
		content: "";
		position: absolute;
		border-width: 5px;
		border-style: solid;
		border-color: transparent rgba(0, 0, 0, 0.253) transparent transparent;
	}

	.tooltip:hover .tooltiptext {
		visibility: visible;
	}
	.buttons {
		display: flex;
		align-items: center;
		height: 21px;
		width: 91px;
		border: none;
		background: #1b1b1cd0;
		border-radius: 20px;
		cursor: pointer;
	}

	.lable {
		color: #f807ec;
		font-family: sans-serif;
		letter-spacing: 1px;
	}

	.buttons:hover {
		background: #000000f8;
	}

	.buttons:hover .svg-icon {
		animation: rotate 1.3s linear infinite;
	}

	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}

		25% {
			transform: rotate(10deg);
		}

		50% {
			transform: rotate(0deg);
		}

		75% {
			transform: rotate(-10deg);
		}

		100% {
			transform: rotate(0deg);
		}
	}
`;

const Five = styled.div`
	display: inline-flex;
	text-align: center;
	width: 100%;
	height: auto;
	max-width: 200px;
	background-color: #c905ff3e;
	border-radius: 30px;
	text-align: center;
	color: aqua;
	margin-left: 60px;
`;

const Home: FC = () => {
	const dispatch = useDispatch();
	const todo = useSelector((state: RootState) => state.userRender);
	const [valueInput, setValueInput] = useState("");
	const [editValue, setEditValue] = useState("");
	const [showInput, setShowInput] = useState<null | number>(null);

	const handleAdd = () => {
		const newData = {
			title: valueInput,
			todos: [],
		};
		dispatch<any>(postRequest(newData));
		setValueInput("");
	};

	const handleEdit = (_id: number, title: string, item: any) => {
		const newUserData = {
			title,
			todos: [
				...item.todos,
				{
					todoTitle: editValue,
					_id: Math.random(),
				},
			],
		};

		dispatch<any>(
			patchRequest({
				newUserData,
				_id,
				title: "",
			})
		);
		setEditValue("");
	};

	useEffect(() => {
		dispatch<any>(getRequest());
	}, [dispatch]);

	const handleDelete = (_id: number) => {
		dispatch<any>(deleteRequest(_id));
	};

	//! edit
	// const edit = (todo: any) => {
	// 	setIsEdit(todo._id);
	// 	setEditValue(todo.todoTitle);
	// };

	//!save
	// const saveEdit = (_id: number, todos: any, id: number, title: string) => {
	// 	const newData = todos.map((el: { _id: number }) => {
	// 		if (el._id === id) {
	// 			return { ...el, todoTitle: newValue };
	// 		}
	// 		return el;
	// 	});

	// 	if (newValue === "") {
	// 		return null;
	// 	} else {
	// 		const updatedData = {
	// 			title,
	// 			todos: newData,
	// 		};
	// 		dispatch(putRequest({ newUserData: updatedData, _id, title: "" }));
	// 	}

	// 	setIsEdit(null);
	// 	setNewValue("");
	// };

	return (
		<>
			<Header />
			<Navbar />
			<Three>
				<Doska />
				<Fore>
					<div className="plusButton" onClick={handleAdd}>
						<svg
							className="plusIcon"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 30 30">
							<g mask="url(#mask0_21_345)">
								<path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
							</g>
						</svg>
					</div>
					<input
						type="text"
						value={valueInput}
						onChange={(e) => setValueInput(e.target.value)}
					/>
					<Five>
						{todo.data.map((item) => (
							<div key={item._id}>
								<p>{item.title}</p>
								{item.todos.map((el: { _id: number; todoTitle: string }) => (
									<div key={el._id}>
										<p>{el.todoTitle}</p>
										<button
											className="buttons"
											onClick={() => {
												setShowInput(item._id);
												setEditValue(el.todoTitle);
											}}>
											Edit
										</button>
										<button
											className="buttons"
											// onClick={() =>
											// saveEdit(item._id, item.todos, el._id, item.title)
											// }
										>
											Save Edit
										</button>
									</div>
								))}

								<button
									className="buttons"
									onClick={() => {
										setShowInput(item._id);
									}}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										viewBox="0 0 20 20"
										height="20"
										fill="none"
										className="svg-icon">
										<g
											stroke-width="1.5"
											stroke-linecap="round"
											stroke="#de8a2a">
											<circle r="7.5" cy="10" cx="10"></circle>
											<path d="m9.99998 7.5v5"></path>
											<path d="m7.5 9.99998h5"></path>
										</g>
									</svg>
									<span className="lable">Add Two</span>
								</button>
								{item._id === showInput ? (
									<>
										<input
											type="text"
											value={editValue}
											onChange={(e) => setEditValue(e.target.value)}
										/>
										<button
											className="buttons"
											onClick={() => handleEdit(item._id, item.title, item)}>
											Save
										</button>
									</>
								) : null}
								<button
									className="tooltip"
									onClick={() => handleDelete(item._id)}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 20 20"
										height="25"
										width="25">
										<path
											fill="#6361D9"
											d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z"
											clip-rule="evenodd"
											fill-rule="evenodd"></path>
									</svg>
									<span className="tooltiptext"></span>
								</button>
							</div>
						))}
					</Five>
				</Fore>
			</Three>
		</>
	);
};

export default Home;
