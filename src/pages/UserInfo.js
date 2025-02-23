import React, { useState } from 'react';
import UserInfoForm from '../components/UserInfoForm';

function UserInfo({ user, setUser }) {
  const [isEditing, setIsEditing] = useState(false);

  if (!user) return null;

  const formatPhoneNumber = (value) => {
    // Remove non-digits
    const digits = value.replace(/\D/g, '');
    // Format as (xxx)xxx-xxxx
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)})${digits.slice(3)}`;
    return `(${digits.slice(0, 3)})${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  };

  return (
    <div className="container">
      <h2>User Info</h2>
      {isEditing ? (
        <UserInfoForm user={user} setUser={setUser} setIsEditing={setIsEditing} />
      ) : (
        <>
          <p><strong>First name:</strong> {user.firstname || 'Not set'}</p>
          <p><strong>Last name:</strong> {user.lastname || 'Not set'}</p>
          <p><strong>Phone number:</strong> {user.phone ? formatPhoneNumber(user.phone) : 'Not set'}</p>
          <p><strong>Birthdate:</strong> {user.birthdate || 'Not set'}</p>
          <p><strong>Gender:</strong> {user.gender || 'Not set'}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}//TODO: validate user entry in user info!

export default UserInfo;