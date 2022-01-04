import React, { createContext, useContext, useState } from "react"
import { useSwapi } from "../hooks/Swapi"

const AppContext = createContext({})

export const AppProvider = ({children}) => {
    const [people, setPeople] = useState([])
    const { people: requestSwapi } = useSwapi()

    const requestPeople = async () => {
        const data = await requestSwapi()
        setPeople(data)
    }

   return (
    <AppContext.Provider value={{
        people,
        requestPeople
    }}>
        { children }
    </AppContext.Provider>
   )
}

export const useAppContext = () => useContext(AppContext)