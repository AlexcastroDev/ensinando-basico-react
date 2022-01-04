import { configureStore } from '@reduxjs/toolkit'
import PeopleReducer from "./reducers/people"

const store =  configureStore({ 
    reducer: {
        characters: PeopleReducer
    }  
})

export default store