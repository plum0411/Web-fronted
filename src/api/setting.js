import axios from "axios";

const request = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    responseType: 'json',
    withCredentials: true,
});

const config = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('access_token')}`,
    }
}

const anonymousId = 99999

export {
    request,
    config,
    anonymousId,
};