import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSwapi } from "../../hooks/Swapi"

export const getPeople = createAsyncThunk("requestPeople", async () => {
    const { requestSwapi } = useSwapi()
    const data = await requestSwapi()

    return data
})