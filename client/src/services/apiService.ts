import axios from "axios";

const apiUrl = `http://localhost:${import.meta.env.VITE_PORT}`;


export const postImage = async (image: FormData) => {
    try {
        const { data } = await axios.post(`${apiUrl}/image/get_colors`, image);
        return data;
    } catch (error) {
        return Promise.reject(`Promise.reject: ${error}`);
    }
};