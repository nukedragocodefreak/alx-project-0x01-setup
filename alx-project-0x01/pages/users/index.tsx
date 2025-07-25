
import Head from "next/head";
import { UserProps } from "../../interfaces";
import UserCard from "../../components/common/UserCard";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

const Users = ({ posts }: { posts: UserProps[] }) => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <main className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">User Directory</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Users;

