export const useSwapi = () => ({
    requestSwapi: async () => {
        try {
            const response = await fetch("https://swapi.dev/api/people")
            const data = await response.json()
            return data.results
        } catch (e) {
            throw new Error({
                status: false,
                error: e
            })
        }
    } 
})