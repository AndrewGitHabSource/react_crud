import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_URL;

export const getUsers = async (page) =>  {
    return await axios.get(baseUrl + 'api/', {
        "params": {page},
    });
}

export const getUser = async (id) =>  {
    return await axios.get(baseUrl + 'api/get-user', {
        "params": {id},
    });
}

export const saveUser = async (user) => {
    return await axios.post(baseUrl + 'api/save', user);
}

export const editUser = async (user) => {
    return await axios.post(baseUrl + 'api/edit', user);
}
