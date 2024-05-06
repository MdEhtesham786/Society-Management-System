import { createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    loggedInUser: {}
};
export const userReducer = createSlice({
    name: 'loggedInUser',
    initialState,
    reducers: {
        isLogin: (state, action) => {
            state.loggedInUser = action.payload;
        },
        logoutUser: (state, action) => {
            state.loggedInUser.message = action.payload;
        }
    }
});
export const { logoutUser, isLogin } = userReducer.actions;
export default userReducer.reducer;