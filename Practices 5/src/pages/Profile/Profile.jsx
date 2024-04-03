import profileImg from '../../assets/mypic.png';

import { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({
    profileImage: 'https://via.placeholder.com/150', // Replace with actual image URL
    username: '@JohnDoe123',
    displayName: 'Md Ataaullah',
    about: 'Passionate developer. Coffee lover. 🚀',
    address: '123 Main Street, Cityville, Country',
    email: 'john.doe@example.com',
    phoneNumber: '+1 (555) 123-4567',
    password: '', // Initialize with empty password
  });

  // State for edit mode
  const [editMode, setEditMode] = useState(false);

  // Handle input changes
  const handleInputChange = (field, value) => {
    setUser((prevUser) => ({ ...prevUser, [field]: value }));
  };

  // Handle password change
  const handlePasswordChange = () => {
    // Implement your password change logic here
    console.log('New password:', user.password);
    // Reset the input field
    setUser((prevUser) => ({ ...prevUser, password: '' }));
  };

  return (
    <div className="bg-gray-100 rounded-2xl min-h-[calc(100vh-92px)] flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded-lg shadow-md">
        {/* Profile Image */}
        <img
          src={profileImg}
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />

        {/* Username */}
        <h2 className="text-xl font-semibold text-center">{user.username}</h2>

        {/* Display Name */}
        <p className="text-gray-600 text-center">{user.displayName}</p>

        {/* About */}
        {editMode ? (
          <textarea
            value={user.about}
            onChange={(e) => handleInputChange('about', e.target.value)}
            className="mt-4 w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        ) : (
          <p className="mt-4 text-center text-sm text-gray-500">{user.about}</p>
        )}

        {/* Address */}
        {editMode ? (
          <input
            type="text"
            value={user.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            className="mt-2 w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        ) : (
          <p className="mt-4 text-center text-gray-600">{user.address}</p>
        )}

        {/* Email */}
        <p className="mt-2 text-center text-blue-500 hover:underline">
          {user.email}
        </p>

        {/* Phone Number */}
        <p className="mt-2 text-center text-gray-600">{user.phoneNumber}</p>

        {/* Edit and Save Buttons */}
        {editMode ? (
          <button
            onClick={() => setEditMode(false)}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Edit Profile
          </button>
        )}

        {/* Password Change Form */}
        <div className="mt-6">
          <input
            type="password"
            placeholder="New Password"
            value={user.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
          <button
            onClick={handlePasswordChange}
            className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Change Password
          </button>
        </div>

        {/* Delete Profile Button */}
        <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
          Delete Profile
        </button>
      </div>
    </div>
  );
};
export default Profile;
