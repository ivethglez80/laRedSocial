
import style from "./Card.module.css"
import { NavLink } from "react-router-dom";


const Card = (user) => {

    return (
        <>
        <div className={style.oneCard}>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>
            <p>Phone:{user.phone}</p>
        <NavLink to={`detail/${user.id}`}>
            posts
        </NavLink>
        </div>
        </>
    )
};

export default Card;