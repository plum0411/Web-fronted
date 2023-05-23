// api.js

import axios from 'axios';
import { request, config, } from './setting'
const API_BASE_URL = 'http://localhost:8000/api';

export const login = (username, password) => request.post("/login",
    {
        username,
        password,
    }
    , config);

// export const login = async (username, password) => {
//     try {
//         const response = await api.post('/login', {
//             username,
//             password,
//         });
//         return response.data;
//     } catch (error) {
//         throw error.response.data;
//     }
// };

export const getPosts = async () => {
    try {
        const response = await request.get('/posts');
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const createPost = async (content) => {
    try {
        const response = await request.post('/posts', {
            content,
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const deletePost = async (postId) => {
    try {
        const response = await request.delete(`/posts/${postId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const updatePost = async (postId, content) => {
    try {
        const response = await request.put(`/posts/${postId}`, {
            content,
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getOnePost = async (postId) => {
    try {
        const response = await request.get(`/posts/${postId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };
    return dateTime.toLocaleString('ch-TW', options);
};