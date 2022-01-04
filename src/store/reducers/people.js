import { createSlice } from "@reduxjs/toolkit";
import { getPeople } from "../actions/people";

const initialState = {
    people: [],
    isLoading: false
}

const peopleSlice = createSlice({
    name: "people",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getPeople.fulfilled, (state, {payload}) => {
            state.people = payload
            state.isLoading = false
        })
        .addCase(getPeople.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getPeople.rejected, (state) => {
            state.people = []
            state.isLoading = false
        })
    }
})

export default peopleSlice.reducer