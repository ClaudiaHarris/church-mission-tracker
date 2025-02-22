import React, { useState } from 'react';
import UserInfoForm from '../components/UserInfoForm';

function UserInfo({ user, setUser }) {
  const [isEditing, setIsEditing] = useState(false);

  if (!user) return null;

  return (
    <div className="container">
      <h2>User Info</h2>
      {isEditing ? (
        <UserInfoForm user={user} setUser={setUser} setIsEditing={setIsEditing} />
      ) : (
        <>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email || 'Not set'}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default UserInfo;