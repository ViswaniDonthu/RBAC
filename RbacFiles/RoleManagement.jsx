import React, { useState } from 'react';

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', description: 'Has full access to the system' },
    { id: 2, name: 'Editor', description: 'Can edit content' },
    { id: 3, name: 'Viewer', description: 'Can only view content' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRole, setNewRole] = useState({ name: '', description: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [editedRole, setEditedRole] = useState({});

  // Handle Add Role Input Change
  const handleAddRoleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRole({ ...newRole, [name]: value });
  };

  // Handle Add Role
  const handleAddRole = (e) => {
    e.preventDefault();
    if (newRole.name && newRole.description) {
      const newRoleWithId = { ...newRole, id: roles.length + 1 };
      setRoles([...roles, newRoleWithId]);
      setNewRole({ name: '', description: '' });
      setIsModalOpen(false);
    }
  };

  // Handle Edit Role
  const handleEditRole = (index) => {
    setEditIndex(index);
    setEditedRole({ ...roles[index] });
  };

  const handleSaveRole = () => {
    const updatedRoles = [...roles];
    updatedRoles[editIndex] = { ...editedRole };
    setRoles(updatedRoles);
    setEditIndex(null);
    setEditedRole({});
  };

  // Handle Input Change for Edited Role
  const handleEditedRoleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedRole({ ...editedRole, [name]: value });
  };

  // Handle Delete Role
  const handleDeleteRole = (index) => {
    const updatedRoles = roles.filter((_, i) => i !== index);
    setRoles(updatedRoles);
  };

  return (
    <div className="role-management p-4" >
      <div className="flex flex-wrap justify-between items-center mb-4">
        
        <h2 className="text-xl font-semibold text-white">Role Management</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Role
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-blue-950 text-left text-white font-semibold">Role Name</th>
              <th className="py-2 px-4 bg-blue-950 text-left text-white font-semibold">Description</th>
              <th className="py-2 px-4 bg-blue-950 text-left text-white font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role, index) => (
              <tr key={role.id}>
                <td className="py-2 px-4 border-b border-gray-200">
                  {editIndex === index ? (
                    <input
                      type="text"
                      name="name"
                      value={editedRole.name || ''}
                      onChange={handleEditedRoleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    role.name
                  )}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {editIndex === index ? (
                    <input
                      type="text"
                      name="description"
                      value={editedRole.description || ''}
                      onChange={handleEditedRoleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    role.description
                  )}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {editIndex === index ? (
                    <>
                      <button onClick={handleSaveRole} className="text-green-500 hover:text-green-700 mr-2">
                        <i className="fas fa-check"></i> Save
                      </button>
                      <button onClick={() => setEditIndex(null)} className="text-red-500 hover:text-red-700">
                        <i className="fas fa-times"></i> Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEditRole(index)} className="text-blue-500 hover:text-blue-700 mr-2">
                      <i className="fas fa-edit"></i>
                      </button>
                      <button onClick={() => handleDeleteRole(index)} className="text-red-500 hover:text-red-700">
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

      {/* Modal for Add Role */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Add Role</h3>
            <form onSubmit={handleAddRole}>
              <div className="mb-4">
                <label className="block text-gray-600">Role Name</label>
                <input
                  type="text"
                  name="name"
                  value={newRole.name}
                  onChange={handleAddRoleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Description</label>
                <input
                  type="text"
                  name="description"
                  value={newRole.description}
                  onChange={handleAddRoleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Add Role
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoleManagement;
