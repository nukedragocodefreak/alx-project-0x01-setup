import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = (user) => {
return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <h2 className="text-xl font-bold text-blue-700">{user.name}</h2>
      <p className="text-gray-600 mb-2">@{user.username}</p>
      <p className="text-sm text-gray-500">{user.email}</p>

      <div className="mt-4">
        <h3 className="font-semibold text-sm">📍 Address</h3>
        <p className="text-xs text-gray-600">
          {user.address.street}, {user.address.suite}, {user.address.city}
        </p>
        <p className="text-xs text-gray-600">ZIP: {user.address.zipcode}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-sm">🏢 Company</h3>
        <p className="text-xs text-gray-700">{user.company.name}</p>
        <p className="text-xs italic text-gray-500">{user.company.catchPhrase}</p>
      </div>

      <div className="mt-4 text-xs text-gray-600 space-y-1">
        <p>📞 {user.phone}</p>
        <p>🌐 <a href={`http://${user.website}`} className="hover:underline text-blue-600" target="_blank" rel="noopener noreferrer">{user.website}</a></p>
      </div>
    </div>
  );
};

export default UserCard;
