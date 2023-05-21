import { request, config } from "./setting";

const getMe = async () => {
    try {
        const response = await request.post("/api/auth/me", null, config);
        console.log("使用者資料：", response.data);
    } catch (error) {
        console.error("使用者未登入:", error.response.data);
    }
};

const getPosts = async () => {
    try {
        const response = await request.get("/api/posts/", config);
    } catch (error) {
        console.error(error);
    }
};

const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    return dateTime.toLocaleString("ch-TW", options);
};

const handleFormSubmit = (user_id, message) => {
    // event.preventDefault();
    const url = "/api/posts/";

    request
        .post(
            url,
            { user_id: user_id, content: message },
            config
        )
        .then((response) => {
            // setErrors([]);
            // getPosts();
        })
        // .catch(handleError);
};

const handleDeletePost = (postId) => {
    const url = `/api/posts/${postId}`;

    request
        .delete(url, config)
        .then((response) => {
            getPosts();
        })
        // .catch(handleError);
};

const fetchAuthUserId = () => {
    request
        .get("/api/user", config)
        .then((response) => response.data)
        // .catch(handleError);
};


export {
    getMe,
    getPosts,
    formatDateTime,
    handleFormSubmit,
    handleDeletePost,
    fetchAuthUserId,
    //   getUser,
};
