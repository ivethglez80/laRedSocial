import style from "./PostCard.module.css";

const PostCard = (post) =>{
    return (
        <>
        <div class="m-3">
         <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md p-2">
            <p class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"> {post.title} </p>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased"> {post.body}</p>                    
        </div>
        </div>
        </>
    )
};

export default PostCard;