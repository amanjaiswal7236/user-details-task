import React from 'react';
import { useParams } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const UserDetails = ({ users }) => {
  const { userId } = useParams();
  const user = users.find(u => u.id === userId);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-2/3 p-4 text-center bg-white shadow-md rounded-lg">
          <FaUserCircle className="text-gray-400 text-6xl mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Select a user to see the details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-2/3 p-6 bg-white rounded-lg flex">
        <div className="w-1/3 flex flex-col items-center">
          <img src={user.avatar} alt={user.profile.username} className="w-32 h-32 rounded-full mb-4" />
          <h2 className="text-2xl font-bold mb-2">{user.profile.firstName} {user.profile.lastName}</h2>
          <p className="text-gray-600 mb-4">{user.jobTitle}</p>
        </div>
        <div className="w-2/3 pl-6">
          <p className="mb-2"><strong>Username:</strong> {user.profile.username}</p>
          <p className="mb-2"><strong>Email:</strong> {user.profile.email}</p>
          <p className="mb-2"><strong>Job Title:</strong> {user.jobTitle}</p>
          <p className="mb-2"><strong>Bio:</strong> {user.Bio}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
