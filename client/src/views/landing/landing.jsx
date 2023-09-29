import React from "react";
import {Link} from "react-router-dom"

const landing = () => {
    return(
        <>         
        <p>este es landing</p>
        <Link to="/home">Home</Link>
        </>
    )
};

export default landing;