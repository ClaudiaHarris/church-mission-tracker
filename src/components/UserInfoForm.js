import React, { useState, useEffect } from 'react';

function UserInfoForm({ user, setUser, setIsEditing }) {
  const [formData, setFormData] = useState(()=> {
    console.log('Initial user prop:', user);
    return {
      firstname: user.firstname || '',
      lastname: user.lastname || '',
      phone: user.phone || '',
      birthdate: user.birthdate || '',
      gender: user.gender || ''
    };
  }); //TODO: removed debugging logs when done
   useEffect(() => {
    console.log('formData updated: ', formData);
   }, [formData]);

  const formatPhoneNumber = (value) => {
    // Remove non-digits
    const digits = value.replace(/\D/g, '');
    // Format as (xxx)xxx-xxxx
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)})${digits.slice(3)}`;
    return `(${digits.slice(0, 3)})${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Store raw digits, display formatted
      const rawDigits = value.replace(/\D/g, '').slice(0, 10); // Limit to 10 digits
      setFormData({ ...formData, [name]: rawDigits });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('user:', user);
    console.log('formData:', formData);
    const hasChanges =
      formData.firstname !== (user.firstname || '') ||
      formData.lastname !== (user.lastname || '') ||
      formData.phone !== (user.phone || '') ||
      formData.birthdate !== (user.birthdate || '') ||
      formData.gender !== (user.gender || '');
    
      if (hasChanges) {
        setUser(formData);
        alert('User information updated successfully!');
      } else {
        alert('No changes were made.');
      }
    setIsEditing(false);
  };//TODO: add phone number

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          
        />
      </div>

      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          
        />
      </div>

      <div>
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          maxLength='14'
        />
      </div>

      <div>
        <label>Birthdate:</label>
        <input
          type="date"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
          
        />
      </div>

      <div>
        <label>Pasword:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default UserInfoForm;