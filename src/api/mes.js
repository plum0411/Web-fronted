import { request, config } from "./setting";

const getPosts = () => request.get("/api/posts", config);

export {
    getPosts
};