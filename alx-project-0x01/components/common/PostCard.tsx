import React from "react";

type PostCardProps = {
    title: string;
    content: string;
};

const PostCard: React.FC<PostCardProps>({title, content}) =>{
 return (
    <div className="">
    <h3>{title}</h3>
     <h3>{content}</h3>
    </div>
 );
};

export default PostCard;