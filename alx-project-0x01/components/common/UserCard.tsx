import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold text-blue-600">{user.name}</h2>
      <p className="text-gray-700">@{user.username}</p>
      <p className="text-gray-500">{user.email}</p>

      <div className="mt-4">
        <h3 className="font-semibold">Address</h3>
        <p className="text-sm text-gray-600">
          {user.address.street}, {user.address.suite}, {user.address.city}
        </p>
        <p className="text-sm text-gray-600">Zipcode: {user.address.zipcode}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Company</h3>
        <p className="text-sm text-gray-600">{user.company.name}</p>
        <p className="text-xs italic text-gray-500">"{user.company.catchPhrase}"</p>
      </div>

      <div className="mt-4 text-sm text-gray-700">
        {user.phone} <br />
        {user.website}
      </div>
    </div>
  );
};

export default UserCard;
