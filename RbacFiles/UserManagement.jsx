import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Inactive' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '', status: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [editedUser, setEditedUser] = useState({});

  // Handle Add User Input Change
  const handleAddUserInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // Handle Edit User Input Change
  const handleEditedUserInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  // Handle Add User
  const handleAddUser = (e) => {
    e.preventDefault();
    if (newUser.name && newUser.email && newUser.role && newUser.status) {
      const newUserWithId = { ...newUser, id: users.length + 1 };
      setUsers([...users, newUserWithId]);
      setNewUser({ name: '', email: '', role: '', status: '' });
      setIsModalOpen(false);
    }
  };

  // Handle Edit User
  const handleEditUser = (index) => {
    setEditIndex(index);
    setEditedUser({ ...users[index] });
  };

  const handleSaveUser = () => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = { ...editedUser };
    setUsers(updatedUsers);
    setEditIndex(null);
    setEditedUser({});
  };

  // Handle Delete User
  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className="user-management p-4">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">User Management</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add User
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-blue-950 text-center text-white font-semibold">Name</th>
              <th className="py-2 px-4 bg-blue-950 text-center text-white font-semibold">Email</th>
              <th className="py-2 px-4 bg-blue-950 text-center text-white font-semibold">Role</th>
              <th className="py-2 px-4 bg-blue-950 text-center text-white font-semibold">Status</th>
              <th className="py-2 px-4 bg-blue-950 text-center text-white font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b border-gray-200 text-center">
                  {editIndex === index ? (
                    <input
                      type="text"
                      name="name"
                      value={editedUser.name || ''}
                      onChange={handleEditedUserInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-center">
                  {editIndex === index ? (
                    <input
                      type="email"
                      name="email"
                      value={editedUser.email || ''}
                      onChange={handleEditedUserInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-center">
                  {editIndex === index ? (
                    <input
                      type="text"
                      name="role"
                      value={editedUser.role || ''}
                      onChange={handleEditedUserInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    user.role
                  )}
                </td>
                <td className={`py-2 px-4 border-b border-gray-200 text-center ${
                  user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {editIndex === index ? (
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="status"
                          value="Active"
                          checked={editedUser.status === 'Active'}
                          onChange={handleEditedUserInputChange}
                          className="mr-2"
                        />
                        Active
                      </label>
                      <label className="ml-4">
                        <input
                          type="radio"
                          name="status"
                          value="Inactive"
                          checked={editedUser.status === 'Inactive'}
                          onChange={handleEditedUserInputChange}
                          className="mr-2"
                        />
                        Inactive
                      </label>
                    </div>
                  ) : (
                    user.status
                  )}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-center">
                  {editIndex === index ? (
                    <>
                      <button onClick={handleSaveUser} className="text-green-500 hover:text-green-700 mr-2">
                        <i className="fas fa-check"></i> Save
                      </button>
                      <button onClick={() => setEditIndex(null)} className="text-red-500 hover:text-red-700">
                        <i className="fas fa-times"></i> Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEditUser(index)} className="text-blue-500 hover:text-blue-700 mr-2">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button onClick={() => handleDeleteUser(index)} className="text-red-500 hover:text-red-700">
                        <i className="fas fa-trash"></i>
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Add User */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Add User</h3>
            <form onSubmit={handleAddUser}>
              <div className="mb-4">
                <label className="block text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleAddUserInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleAddUserInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Role</label>
                <input
                  type="text"
                  name="role"
                  value={newUser.role}
                  onChange={handleAddUserInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Status</label>
                <div className="flex items-center">
                  <label className="mr-4">
                    <input
                      type="radio"
                      name="status"
                      value="Active"
                      checked={newUser.status === 'Active'}
                      onChange={handleAddUserInputChange}
                      className="mr-2"
                    />
                    Active
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="status"
                      value="Inactive"
                      checked={newUser.status === 'Inactive'}
                      onChange={handleAddUserInputChange}
                      className="mr-2"
                    />
                    Inactive
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
