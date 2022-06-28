import axios from 'axios';

export default defineEventHandler(async (event) => {
    const page = event.context.params.photos ? event.context.params.photos.split('/')[1] : 0;
    const API_KEY = "oNY7ILLJAH6J5_904imiLFyCY_8boZZnWMsrg2RH0Ig";
    const URL = `https://api.unsplash.com/photos?page=${page}&per_page=20&client_id=${API_KEY}`;
    const { data } = await axios.get(URL);
    console.log('server: ', data);
    return data;
})