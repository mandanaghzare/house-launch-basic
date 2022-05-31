import { createSlice } from "@reduxjs/toolkit";

export const activateSlice = createSlice({
    name: 'activate',
    initialState: {
        value: true,
    },
    reducers: {
        active: (state) => {
            state.value = true
        },
        deActive: (state) => {
            state.value = false
        }
    }
})

export const { active, deActive } = activateSlice.actions;

export default activateSlice.reducer;