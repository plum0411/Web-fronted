import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChatBubbleOvalLeftEllipsisIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import Header from '../component/Header';

const MessageBoard = () => {
    const [posts, setPosts] = useState([]);
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState([]);
    const [authUserId, setAuthUserId] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [user, setUser] = useState();
    const [editingPostId, setEditingPostId] = useState(null);

    useEffect(() => {
        getMe();
        fetchAuthUserId();
        getPosts();
    }, []);

    const getMe = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/auth/me', null, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            });
            setUser(response.data);
            console.log('使用者資料：', response.data);
        } catch (error) {
            console.error('使用者未登入:', error.response.data);
        }
    };

    const getPosts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/posts/', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            });
            setPosts(response.data.data.posts);
        } catch (error) {
            console.error(error);
        }
    };

    const formatDateTime = (dateTimeString) => {
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

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const user_id = authUserId || 99999;
        const url = `http://localhost:8000/api/posts/`;

        axios
            .post(
                url,
                { user_id, content: message },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    },
                }
            )
            .then((response) => {
                setMessage('');
                setErrors([]);
                getPosts();
            })
            .catch((error) => {
                if (error.response && error.response.data.errors) {
                    setErrors(error.response.data.errors);
                } else {
                    console.error(error);
                }
            });
    };

    const handleDeletePost = (postId) => {
        const url = `http://localhost:8000/api/posts/${postId}`;

        axios
            .delete(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then((response) => {
                getPosts();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const fetchAuthUserId = () => {
        fetch('http://localhost:8000/api/user', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setAuthUserId(data.id);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const toggleDropdown = (postId) => {
        setIsDropdownOpen(!isDropdownOpen);
        setSelectedPostId(postId);
    };

    const handleEditPost = (postId) => {
        setEditingPostId(postId);
    };

    const handleCancelEdit = () => {
        setEditingPostId(null);
    };

    const handleUpdatePost = (event, postId) => {
        event.preventDefault();

        axios
            .put(
                `http://localhost:8000/api/posts/${postId}`,
                { content: message },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    },
                }
            )
            .then((response) => {
                setMessage('');
                setErrors([]);
                setEditingPostId(null);
                getPosts();
            })
            .catch((error) => {
                if (error.response && error.response.data.errors) {
                    setErrors(error.response.data.errors);
                } else {
                    console.error(error);
                }
            });
    };

    return (
        <div className="App font-poppins bg-white dark:bg-stone-900 h-full m-0 p-0 pt-16">
            <Header />
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={handleFormSubmit}>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="打下你想說的話 ..."
                        value={message}
                        onChange={handleInputChange}
                        className="p-5 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                    />
                    {errors.message && <div className="text-red-500">{errors.message[0]}</div>}
                    <button
                        type="submit"
                        className="flex mt-4 bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded"
                    >
                        發文
                    </button>
                </form>
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {posts.map((post) => (
                        <div key={post.id} className="p-6 flex space-x-2">
                            <div className="w-6 h-6 text-amber-700">
                                <ChatBubbleOvalLeftEllipsisIcon />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className={post.user_id === 99999 ? 'font-bold text-gray-700' : 'font-bold text-amber-700'}>
                                            {post.user.name}
                                        </span>
                                        <small className="ml-2 text-sm text-gray-600">{formatDateTime(post.created_at)}</small>
                                        {post.created_at !== post.updated_at && (
                                            <small className="text-sm text-gray-600"> · edited</small>
                                        )}
                                    </div>
                                    {(post.user_id === authUserId || authUserId === null) && post.user_id !== 99999 && (
                                        <div className="relative inline-block text-left">
                                            <button
                                                className="focus:outline-none w-6 h-6 text-gray-400 hover:text-gray-600"
                                                type="button"
                                                onClick={() => toggleDropdown(post.id)}
                                            >
                                                <EllipsisHorizontalIcon />
                                            </button>
                                            {isDropdownOpen && selectedPostId === post.id && (
                                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                        <a
                                                            onClick={() => handleEditPost(post.id)}
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900 w-full text-left"
                                                            role="menuitem"
                                                        >
                                                            編輯
                                                        </a>
                                                        <button
                                                            className="block px-4 py-2 text-sm text-red-700 hover:bg-red-100 hover:text-red-900 w-full text-left"
                                                            role="menuitem"
                                                            onClick={() => handleDeletePost(post.id)}
                                                        >
                                                            刪除
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                                {editingPostId === post.id ? (
                                    <form onSubmit={(event) => handleUpdatePost(event, post.id)}>
                                        <textarea
                                            value={message}
                                            onChange={handleInputChange}
                                            className="my-4 p-5 block w-full border-gray-300 focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                        />
                                        {errors.message && <div className="text-red-500">{errors.message[0]}</div>}
                                        <div className="flex mt-4 space-x-4 justify-end">
                                            <button
                                                type="submit"
                                                className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded"
                                            >
                                                更新
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleCancelEdit}
                                                className="bg-gray-500 hover:bg-gray-400 text-white py-2 px-4 rounded"
                                            >
                                                取消
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    <p className="flex mt-4 text-lg text-gray-700">{post.content}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MessageBoard;
