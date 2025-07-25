
import React from "react";
import { UserModalProps } from "../../interfaces";


const UserModal: React.FC<UserModalProps> = ({ user, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
            aria-label="Close modal"
          >
            ✕
          </button>

          <h2 className="text-2xl font-semibold mb-4">User Details</h2>

          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> @{user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>

          <div className="mt-3">
            <h3 className="font-semibold">Address</h3>
            <p>{user.address.street}, {user.address.suite}</p>
            <p>{user.address.city} - {user.address.zipcode}</p>
          </div>

          <div className="mt-3">
            <h3 className="font-semibold">Company</h3>
            <p>{user.company.name}</p>
            <p className="italic">"{user.company.catchPhrase}"</p>
          </div>

          <div className="mt-3 text-sm text-gray-700 space-y-1">
            <p>Phone: {user.phone}</p>
            <p>Website: <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{user.website}</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserModal;


