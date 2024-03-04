import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ReactNode } from "react";

interface Todo {
	title: ReactNode;
	todos: any;
	_id: number;

	email: string;
	password: string;
}

interface HomeState {
	todo: Todo[];
	loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: HomeState = {
	todo: [],
	loading: "idle",
};

const url =
	"https://api.elchocrud.pro/api/v1/9aaac09e029329576d92152a5841c18d/users";

export const fetchTodo = createAsyncThunk("home/fetchTodo", async () => {
	const response = await axios.get<Todo[]>(url);
	return response.data;
});

export const deleteTodo = createAsyncThunk(
	"home/deleteTodo",
	async (id: number) => {
		const checkUserResponse = await axios.get<Todo>(`${url}/${id}`);
		if (checkUserResponse.data) {
			await axios.delete<Todo[]>(`${url}/${id}`);
			return id;
		} else {
			console.error(`User with id ${id} does not exist.`);
			throw new Error("User does not exist");
		}
	}
);

const TrelloSlice = createSlice({
	name: "home",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTodo.pending, (state) => {
				state.loading = "pending";
			})
			.addCase(fetchTodo.fulfilled, (state, action: PayloadAction<Todo[]>) => {
				state.loading = "succeeded";
				state.todo = action.payload;
			})
			.addCase(fetchTodo.rejected, (state) => {
				state.loading = "failed";
			})
			.addCase(deleteTodo.pending, (state) => {
				state.loading = "pending";
			})
			.addCase(deleteTodo.fulfilled, (state, action: PayloadAction<number>) => {
				state.loading = "succeeded";
				state.todo = state.todo.filter((item) => item._id !== action.payload);
			})
			.addCase(deleteTodo.rejected, (state) => {
				state.loading = "failed";
			});
	},
});

export default TrelloSlice.reducer;
