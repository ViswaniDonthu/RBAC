import React, { useState } from 'react';

const Permissions = () => {
  // State to manage permissions data
  const [permissions, setPermissions] = useState([
    { id: 1, permission: 'Read', description: 'Allows reading of data' },
    { id: 2, permission: 'Write', description: 'Allows writing of data' },
    { id: 3, permission: 'Read and Write', description: 'Allows both reading and writing of data' },
  ]);

  // State to handle modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [permissionData, setPermissionData] = useState({
    permission: '',
    description: '',
  });

  // State to manage which permission is being edited
  const [editingPermission, setEditingPermission] = useState(null);

  // Handle Add Permission
  const handleAddPermission = () => {
    setPermissions([...permissions, { ...permissionData, id: permissions.length + 1 }]);
    setIsModalOpen(false);
    setPermissionData({ permission: '', description: '' });
  };

  // Handle Delete Permission
  const handleDeletePermission = (id) => {
    setPermissions(permissions.filter((permission) => permission.id !== id));
  };

  // Handle input changes in the form
  const handleChange = (e) => {
    setPermissionData({ ...permissionData, [e.target.name]: e.target.value });
  };

  // Handle Start Editing
  const handleEditPermission = (permission) => {
    setEditingPermission(permission.id);
    setPermissionData({ permission: permission.permission, description: permission.description });
  };

  // Handle Save Edited Permission
  const handleSaveEditedPermission = () => {
    setPermissions(
      permissions.map((perm) =>
        perm.id === editingPermission ? { ...perm, ...permissionData } : perm
      )
    );
    setEditingPermission(null);
    setPermissionData({ permission: '', description: '' });
  };

  return (
    <div className="permission p-4">
        <div className="flex flex-wrap justify-between items-center mb-4">
        
        <h2 className="text-xl  font-semibold text-white">Permissions</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Permission
        </button>
      </div>

      {/* Permissions Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-blue-950 text-left text-white font-semibold">Permission</th>
              <th className="py-2 px-4 bg-blue-950 text-left text-white font-semibold">Description</th>
              <th className="py-2 px-4 bg-blue-950 text-left text-white font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((permission) => (
              <tr key={permission.id}>
                <td className="py-2 px-4 border-b border-gray-200">
                  {editingPermission === permission.id ? (
                    <input
                      type="text"
                      name="permission"
                      value={permissionData.permission}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    permission.permission
                  )}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {editingPermission === permission.id ? (
                    <textarea
                      name="description"
                      value={permissionData.description}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      rows="4"
                    />
                  ) : (
                    permission.description
                  )}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {editingPermission === permission.id ? (
                    <button
                      onClick={handleSaveEditedPermission}
                      className="text-green-500 hover:text-green-700 mr-2"
                    >
                      <i className="fas fa-check"></i> Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEditPermission(permission)}
                      className="text-blue-500 hover:text-blue-700 mr-2"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                  )}
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeletePermission(permission.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Permission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Add Permission</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="permission" className="block text-gray-600 mb-2">
                  Permission
                </label>
                <select
                  id="permission"
                  name="permission"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={permissionData.permission}
                  onChange={handleChange}
                >
                  <option value="">Select Permission</option>
                  <option value="Read">Read</option>
                  <option value="Write">Write</option>
                  <option value="Read and Write">Read and Write</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-600 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={permissionData.description}
                  onChange={handleChange}
                  rows="4"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={handleAddPermission}
                >
                  Save Permission
                </button>
                <button
                  type="button"
                  className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Permissions;
