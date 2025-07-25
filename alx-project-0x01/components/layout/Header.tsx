import React from "react";
import Link from "next/link";
const Header: React.FC = () => {
    return (
        <header>
            <h1>My Application</h1>
            <Link href='/user'>Users</Link>
        </header>
    );
};

export default Header;