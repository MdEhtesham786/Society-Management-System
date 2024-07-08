import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    primaryColor: '#ffffff',
    secondaryColor: '#e9f2f2'
};
export const adminSettingsSlice = createSlice({
    name: 'adminSettings',
    initialState,
    reducers: {
        setAdminSettings: (state, action) => {
            state = action.payload;
        },
        setPrimaryColor: (state, action) => {
            state.primaryColor = action.payload;
        },
        setSecondaryColor: (state, action) => {
            state.secondaryColor = action.payload;
        }
    }
});
export const { setAdminSettings, setPrimaryColor, setSecondaryColor } = adminSettingsSlice.actions;
export default adminSettingsSlice.reducer;