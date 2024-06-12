import axios from "axios";

const PORT = 8080;

const apiUrl = `http://localhost:${PORT}`;


export const postImage = async (image: FormData) => {
    try {
        const { data } = await axios.post(`${apiUrl}/image/get_colors`, image);
        return data;
    } catch (error) {
        return Promise.reject(`Promise.reject: ${error}`);
    }
};