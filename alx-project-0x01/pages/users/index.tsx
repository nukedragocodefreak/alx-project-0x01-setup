import React from "react";
import Button from "../../components/common/Button";

const UserPage: React.FC = () =>{
    return(
        <div>
        <h2>First of MNY</h2>
        <Button title= "My First Post" content = "The future is here..." />
        </div>
    );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}


export default UserPage