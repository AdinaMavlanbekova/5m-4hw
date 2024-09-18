import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: {
        count: 0
    },
    reducers: {
        plusCount: (state, action) => {
            state.count = action.payload
        },
        minusCount: (state, action) => {
            state.count = action.payload
        },
        resetCount: (state, action) => {
            state.count = action.payload
        },
        plusTen: (state, action) => {
            state.count = action.payload
        },
        minusTen: (state, action) => {
            state.count = action.payload
        }
    }
})

export const {plusCount,
    minusCount,
    resetCount,
    plusTen,
    minusTen
} = counterSlice.actions

export default counterSlice.reducer