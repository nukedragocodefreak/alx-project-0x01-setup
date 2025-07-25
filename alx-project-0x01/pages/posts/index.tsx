import React from "react";
import PostCard from "../../components/common/PostCard";

const PostPage: React.FC = () =>{
    return(
        <div>
        <h2>First of Many</h2>
        <PostCard title= "My First Post" content = "The future is here..." />
        </div>
    );
};

export default PostPage