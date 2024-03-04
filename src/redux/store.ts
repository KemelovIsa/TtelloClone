import { configureStore } from "@reduxjs/toolkit";
import TrelloSlice from "./tools/TrelloSlice";
import { userRender } from "./tools/TaskCardSlice";

export const store = configureStore({
	reducer: { TrelloSlice, userRender },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
