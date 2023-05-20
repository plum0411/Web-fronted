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

    useEffect(() => {
        fetchAuthUserId();
        getPosts();
    }, []);

    const getPosts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/posts/', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            });
            setPosts(response.data.data.posts);//.filter(post => post.user_id === authUserId)
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

        // Check if the user is logged in or anonymous
        const user_id = authUserId || 99999; // Replace with the actual user ID
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
                // Access the user's ID from the response data
                const userID = data.id;

                // Use the user's ID or perform other actions with the data
                setAuthUserId(userID);
            })
            .catch((error) => {
                // Handle any errors
                console.error(error);
            });
    };

    const toggleDropdown = (postId) => {
        setIsDropdownOpen(!isDropdownOpen);
        setSelectedPostId(postId);
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
                            <div className='w-6 h-6 text-amber-700'>
                                <ChatBubbleOvalLeftEllipsisIcon />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <small className="ml-2 text-sm text-gray-600">{formatDateTime(post.created_at)}</small>
                                        {post.created_at !== post.updated_at && (
                                            <small className="text-sm text-gray-600"> · edited</small>
                                        )}
                                    </div>
                                    {(post.user_id === authUserId || !authUserId) && (
                                        <div className="relative inline-block text-left">
                                            <button className="focus:outline-none w-6 h-6 text-gray-400 hover:text-gray-600" type="button" onClick={() => toggleDropdown(post.id)}>
                                                <EllipsisHorizontalIcon />
                                            </button>
                                            {isDropdownOpen && selectedPostId === post.id && (
                                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                        <a
                                                            href={`/posts/edit/${post.id}`}
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
                                <p className="flex mt-4 text-lg text-gray-900">{post.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MessageBoard;