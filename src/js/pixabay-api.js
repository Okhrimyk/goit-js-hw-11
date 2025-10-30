import axios from 'axios';

const apiKey = `52950914-a47a655b15acf3b435807e601`;
axios.defaults.baseURL = 'https://pixabay.com/api/'; 

function getImagesByQuery(query) {
    console.log("query", query);
    return axios.get("", {
        params : {
            key: apiKey,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        }
    })
        .then(({ data }) => {
            return data;
        })
        .catch((error) => { console.log(error) });
};

export { getImagesByQuery };
