export const usePhotos = async (value) => {
    const API_KEY = "oNY7ILLJAH6J5_904imiLFyCY_8boZZnWMsrg2RH0Ig";
    const URL = `https://api.unsplash.com/photos?page=${value}&per_page=20&client_id=${API_KEY}`;
    const { data } = await useFetch(URL);
    return data.value;
}