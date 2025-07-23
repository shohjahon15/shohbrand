import axios from 'axios';
 const BASE_URL='https://youtube-v31.p.rapidapi.com'
const options = {
    method: 'GET',

    params: {
        maxResults: '50',
    },
    headers: {
        'x-rapidapi-key': 'b8060a26d2mshc81199160e28121p19f718jsn990c0aa0c457',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};
export const ApiServise = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URL}/${url}`,options)
        return response.data
    }
}

