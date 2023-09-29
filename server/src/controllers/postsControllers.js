const {Post} = require ("./../db");
const axios = require ("axios");

const createPost = async(title,body,userId) =>{    
        const newPost = await Post.create({title,body});
        await newPost.setUser(userId);
        return newPost;              
};

const getPosts = async(id, source) =>{
        const apiPosts = (await axios.get('https://jsonplaceholder.typicode.com/posts')).data;
        const dbPosts = await Post.findAll();
        return [...apiPosts, ...dbPosts];               
};

module.exports = {createPost, getPosts}