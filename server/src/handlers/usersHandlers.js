const {createUser, getUserById, searchUserByName, getAllUsers} = require ("./../controllers/usersControllers")

const getUsersHandler = async (req,res) =>{
    const {name} = req.query; 
    try { 
        const results = name ? await searchUserByName(name) : await getAllUsers();
        res.status(200).json(results)        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};

const getUserHandler = async (req,res) => {
    const {id} = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {
        const user = await getUserById(id, source);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};

const createUserHandler = async (req,res) => {
    const {name, email, phone} = req.body;
    try {
        const newUser = await createUser(name, email, phone);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = {
    getUserHandler,
    getUsersHandler,
    createUserHandler
};