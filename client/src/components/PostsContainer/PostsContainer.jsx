import PostCard from "../PostCard/PostCard";
import style from "./PostsContainer.module.css";
import { useSelector } from "react-redux";

const PostsContainer = ({posts}) =>{
    // const user = useSelector(state=>state.user);
    // const posts = user.posts; 

    console.log(posts, "posts");
return (
    <div className={style.postBox}>
       {posts.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
)
};

export default PostsContainer;
