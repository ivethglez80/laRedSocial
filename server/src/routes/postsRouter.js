const {Router} = require("express");
const {getPostsHandler, createPostHandler} = require ("../handlers/postsHandlers")
const postsRouter = Router();

postsRouter.get("/", getPostsHandler);
postsRouter.post("/", createPostHandler);

module.exports = postsRouter;