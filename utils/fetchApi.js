import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers : {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '5ea033ae52mshf4d2e5ef5d18227p1a7d36jsn2ea286bd9154'
        }
    });

    return data;
}