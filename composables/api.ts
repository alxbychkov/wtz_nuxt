const API_URL = "https://api.unsplash.com";
const API_KEY = "oNY7ILLJAH6J5_904imiLFyCY_8boZZnWMsrg2RH0Ig";

export const usePhotos = async (value: Number): Promise<Object> => {
    const URL = `${API_URL}/photos?page=${value}&per_page=20&client_id=${API_KEY}`;
    const { data } = await useFetch(URL);
    return data.value;
}

export const useUsers = async (username: string): Promise<Object> => {
    const URL = `${API_URL}/users/${username}?client_id=${API_KEY}`;
    const { data } = await useFetch(URL);
    return data.value;
}