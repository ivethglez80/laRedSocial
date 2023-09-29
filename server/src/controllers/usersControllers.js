const { post } = require("../routes/postsRouter");
const {User, Post} = require ("./../db");
const axios = require ("axios");


const cleanArray = (array) =>
    array.map(elem=>{
        return {
            id: elem.id,
            name: elem.name,
            email: elem.email,
            phone: elem.phone, 
            created: false
        }
    });    


const createUser = async (name, email, phone) =>
    await User.create({name, email, phone});

// const getUserById = async(id, source)=>{
//     const user =
//         source === "api"
//         ? (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
//         : await User.findByPk(id,{
//             include:{
//                 model:Post,
//                 attributes:["title", "body"]
//             }
//         });
//     return user;
// };

const getUserById = async (id, source) =>{
    try {
        let user;

        if (source === "api"){
            const userData = (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
            const userPosts = (await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)).data;
            user = {
                ...userData, 
                posts: userPosts
            };
        }else if (source ==="db"){
            user = await User.findByPk(id, {
                include:{
                    model: Post,
                    atributes: ["title", "body"]
                }
            })
        }else{
            throw new Error("source not valid")
        }
        return user;
    } catch (error) {
        throw new Error({error: error.message})
    }
}

const getAllUsers = async () => {         
        const dbUsers = await User.findAll(); 
        const apiUsersRaw = (await axios.get("https://jsonplaceholder.typicode.com/users")).data; 
        const apiUsers = cleanArray(apiUsersRaw); 
        return [...dbUsers, ...apiUsers];    
};

const searchUserByName = async(name) => {
    const allUsers = await getAllUsers(); 
    const filterAll = allUsers.filter((user)=>user.name===name); 
    return filterAll;
};

module.exports = {createUser, getUserById, searchUserByName, getAllUsers}
