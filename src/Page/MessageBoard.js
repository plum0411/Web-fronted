import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    return dateTime.toLocaleString('en-US', options);
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
            placeholder="What's on your mind?"
            value={message}
            onChange={handleInputChange}
            className="p-2 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          />
          {errors.message && <div className="text-red-500">{errors.message[0]}</div>}
          <button
            type="submit"
            className="flex mt-4 bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded"
          >
            Post
          </button>
        </form>
        <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
          {posts.map((post) => (
            <div key={post.id} className="p-6 flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 -scale-x-100"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
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
                      <button className="focus:outline-none" type="button" onClick={() => toggleDropdown(post.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                          />
                        </svg>
                      </button>
                      {isDropdownOpen && selectedPostId === post.id && (
                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {post.user_id === authUserId && (
                              <button
                                href={`/posts/edit/${post.id}`}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                Edit
                              </button>
                            )}
                            <button
                              className="block px-4 py-2 text-sm text-red-700 hover:bg-red-100 hover:text-red-900 w-full text-left"
                              role="menuitem"
                              onClick={() => handleDeletePost(post.id)}
                            >
                              Delete
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