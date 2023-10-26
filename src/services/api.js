import axios from "axios";

export const fetchTopStories = async () => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/home`)
        return data.results || [];
    } catch (err) {
        console.error('An error occured', err);
    }
}