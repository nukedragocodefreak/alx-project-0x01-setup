import React from "react";
import Link from "next/link";
const Header: React.FC = () => {
    return (
        <header>
            <h1>My Application</h1>
            <Link href='/users' className="hover:underline">Users</Link>
        </header>
    );
};

export default Header;