import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_URL;

export const getUsers = async () =>  {
    return await axios.get(baseUrl + 'api/');
}


