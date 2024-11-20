import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            if(state.value > 0) {
                state.value -= 1;
            } else {
                alert("Impossible de descendre en dessous de 0");
            }
        },
        reinitialize: (state) => {
            state.value = 0;
        },
    },
});

export const { increment, decrement, reinitialize } = counterSlice.actions;

export default counterSlice.reducer;
