import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions";
import PostsContainer from "../../components/PostsContainer/PostsContainer";


const Detail = (props) => {
    const dispatch = useDispatch();
    const {id}=props.match.params;

    useEffect(()=>{
        dispatch (getUser(id));        
    },[dispatch, id]);

    const user = useSelector(state=>state.user);
    const posts = user.posts; 

    return (
        <>
        <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
        <PostsContainer posts={posts} />
        </>
    )
};

export default Detail;