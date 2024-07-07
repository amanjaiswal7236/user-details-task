import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users, selectedUserId }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user => {
    const fullName = `${user.profile.firstName} ${user.profile.lastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="w-1/3 p-4 border-r h-full overflow-y-auto">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 mb-4 w-full border rounded"
      />
      {filteredUsers.length ? (
        filteredUsers.map(user => (
          <Link
            key={user.id}
            to={`/contacts/${user.id}`}
            className={`flex items-center p-2 cursor-pointer transition-colors duration-200 ${
              selectedUserId === user.id ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'
            }`}
          >
            <img
              src={user.avatar}
              alt={user.profile.username}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <span className="font-bold">{user.profile.firstName} {user.profile.lastName}</span>
              <div className="text-sm">{user.jobTitle}</div>
            </div>
          </Link>
        ))
      ) : (
        <p>No data to show</p>
      )}
    </div>
  );
};

export default UserList;
