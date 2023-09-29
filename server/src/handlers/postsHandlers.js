const {createPost, getPosts} = require ("../controllers/postsControllers");

const createPostHandler = async(req, res)=>{
    const {title, body, userId} = req.body;
    try {
        const newPost = await createPost(title,body,userId);
        res.status(201).json(newPost)        
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

const getPostsHandler = async (req, res) =>{        
    try{
        const posts = await getPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = {
    getPostsHandler, createPostHandler
}