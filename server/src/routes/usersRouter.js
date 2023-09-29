const {Router} = require ("express");

const { 
    getUserHandler,
    getUsersHandler,
    createUserHandler 
} = require ("../handlers/usersHandlers")

const usersRouter = Router();

/*validate es un middleware*/
const validate = (req, res, next) => {
    const {name, email, phone} = req.body;
    if (!name || !email || !phone)
        return res.status(400).json({error:"missing data"});
    next(); 
}

usersRouter.get("/:id",getUserHandler);
usersRouter.get("/", getUsersHandler);
usersRouter.post("/",validate, createUserHandler); /*ahora valida antes de crear*/

module.exports = usersRouter;