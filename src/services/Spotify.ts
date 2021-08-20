import { API } from "./Api";

export const getFavoriteArtists = async () => {
    try {
        const response = await API.get("/artists")
        console.log(response)
        return response.items
    } catch (error) {
        console.error(error)
    }
}