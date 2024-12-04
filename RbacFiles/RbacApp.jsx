// import React, { useState } from 'react';

// const AdminDashboard = () => {
//   // State for tracking the current section
//   const [currentSection, setCurrentSection] = useState('userManagement');

//   // Modal visibility and form input states
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newUser, setNewUser] = useState({
//     name: '',
//     email: '',
//     role: '',
//     status: 'Active',  // Default to Active status
//   });

//   // Sample data for Users, Roles, and Permissions
//   const [users, setUsers] = useState([
//     { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
//     { name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Inactive' },
//     { name: 'Alice Johnson', email: 'alice@example.com', role: 'Viewer', status: 'Active' },
//   ]);

//   // State for tracking the fields being edited
//   const [editIndex, setEditIndex] = useState(null);
//   const [editedUser, setEditedUser] = useState({});

//   // Handlers for Edit and Delete actions
//   const handleEditUser = (index) => {
//     setEditIndex(index);
//     setEditedUser({ ...users[index] });
//   };

//   const handleDeleteUser = (index) => {
//     const updatedUsers = users.filter((_, i) => i !== index);
//     setUsers(updatedUsers);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedUser({
//       ...editedUser,
//       [name]: value
//     });
//   };

//   const handleSaveUser = () => {
//     const updatedUsers = [...users];
//     updatedUsers[editIndex] = { ...editedUser };
//     setUsers(updatedUsers);
//     setEditIndex(null);
//     setEditedUser({});
//   };

//   // Handle form input changes
//   const handleAddUserInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewUser({
//       ...newUser,
//       [name]: value
//     });
//   };

//   // Handle form submission to add a new user
//   const handleAddUser = (e) => {
//     e.preventDefault();
//     if (newUser.name && newUser.email && newUser.role && newUser.status) {
//       setUsers([...users, newUser]);
//       setNewUser({ name: '', email: '', role: '', status: 'Active' });
//       setIsModalOpen(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100 font-roboto">
//       {/* Header */}
//       <header className="bg-white shadow-md py-4">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
//         </div>
//       </header>

//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <aside className="bg-white w-64 min-h-screen shadow-md">
//           <nav className="mt-10">
//             <a
//               href="#"
//               onClick={() => setCurrentSection('userManagement')}
//               className="flex items-center py-2 px-8 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
//             >
//               <i className="fas fa-users mr-3"></i>
//               <span>User Management</span>
//             </a>
//             <a
//               href="#"
//               onClick={() => setCurrentSection('roleManagement')}
//               className="flex items-center py-2 px-8 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
//             >
//               <i className="fas fa-user-tag mr-3"></i>
//               <span>Role Management</span>
//             </a>
//             <a
//               href="#"
//               onClick={() => setCurrentSection('permissions')}
//               className="flex items-center py-2 px-8 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
//             >
//               <i className="fas fa-key mr-3"></i>
//               <span>Permissions</span>
//             </a>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           {/* User Management Section */}
//           {currentSection === 'userManagement' && (
//             <section className="mb-8">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-xl font-semibold text-gray-800">User Management</h2>
//                 <button
//                   onClick={() => setIsModalOpen(true)}
//                   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                 >
//                   Add User
//                 </button>
//               </div>
//               <div className="bg-white shadow-md rounded-lg overflow-hidden">
//                 <table className="min-w-full bg-white">
//                   <thead>
//                     <tr>
//                       <th className="py-2 px-4 bg-gray-200 text-left text-gray-600 font-semibold">Name</th>
//                       <th className="py-2 px-4 bg-gray-200 text-left text-gray-600 font-semibold">Email</th>
//                       <th className="py-2 px-4 bg-gray-200 text-left text-gray-600 font-semibold">Role</th>
//                       <th className="py-2 px-4 bg-gray-200 text-left text-gray-600 font-semibold">Status</th>
//                       <th className="py-2 px-4 bg-gray-200 text-left text-gray-600 font-semibold">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {users.map((user, index) => (
//                       <tr key={index}>
//                         <td className="py-2 px-4 border-b border-gray-200">
//                           {editIndex === index ? (
//                             <input
//                               type="text"
//                               name="name"
//                               value={editedUser.name || ''}
//                               onChange={handleInputChange}
//                               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                             />
//                           ) : (
//                             user.name
//                           )}
//                         </td>
//                         <td className="py-2 px-4 border-b border-gray-200">
//                           {editIndex === index ? (
//                             <input
//                               type="email"
//                               name="email"
//                               value={editedUser.email || ''}
//                               onChange={handleInputChange}
//                               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                             />
//                           ) : (
//                             user.email
//                           )}
//                         </td>
//                         <td className="py-2 px-4 border-b border-gray-200">
//                           {editIndex === index ? (
//                             <input
//                               type="text"
//                               name="role"
//                               value={editedUser.role || ''}
//                               onChange={handleInputChange}
//                               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                             />
//                           ) : (
//                             user.role
//                           )}
//                         </td>
//                         <td className="py-2 px-4 border-b border-gray-200">
//                           {editIndex === index ? (
//                             <input
//                               type="text"
//                               name="status"
//                               value={editedUser.status || ''}
//                               onChange={handleInputChange}
//                               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                             />
//                           ) : (
//                             user.status
//                           )}
//                         </td>
//                         <td className="py-2 px-4 border-b border-gray-200">
//                           {editIndex === index ? (
//                             <>
//                               <button onClick={handleSaveUser} className="text-green-500 hover:text-green-700 mr-2">
//                                 <i className="fas fa-check"></i> Save
//                               </button>
//                               <button onClick={() => setEditIndex(null)} className="text-red-500 hover:text-red-700">
//                                 <i className="fas fa-times"></i> Cancel
//                               </button>
//                             </>
//                           ) : (
//                             <button onClick={() => handleEditUser(index)} className="text-blue-500 hover:text-blue-700 mr-2">
//                               <i className="fas fa-pencil-alt"></i>
//                             </button>
//                           )}
//                           <button onClick={() => handleDeleteUser(index)} className="text-red-500 hover:text-red-700">
//                             <i className="fas fa-trash"></i>
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </section>
//           )}

//           {/* Modal for Add User */}
//           {isModalOpen && (
//             <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
//               <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//                 <h3 className="text-xl font-semibold mb-4">Add User</h3>
//                 <form onSubmit={handleAddUser}>
//                   <div className="mb-4">
//                     <label className="block text-gray-600">Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={newUser.name}
//                       onChange={handleAddUserInputChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-gray-600">Email</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={newUser.email}
//                       onChange={handleAddUserInputChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-gray-600">Role</label>
//                     <input
//                       type="text"
//                       name="role"
//                       value={newUser.role}
//                       onChange={handleAddUserInputChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-gray-600">Status</label>
//                     <div className="flex items-center">
//                       <label className="mr-4">
//                         <input
//                           type="radio"
//                           name="status"
//                           value="Active"
//                           checked={newUser.status === 'Active'}
//                           onChange={handleAddUserInputChange}
//                           className="mr-2"
//                         />
//                         Active
//                       </label>
//                       <label>
//                         <input
//                           type="radio"
//                           name="status"
//                           value="Inactive"
//                           checked={newUser.status === 'Inactive'}
//                           onChange={handleAddUserInputChange}
//                           className="mr-2"
//                         />
//                         Inactive
//                       </label>
//                     </div>
//                   </div>
//                   <div className="flex justify-between">
//                     <button
//                       type="button"
//                       onClick={() => setIsModalOpen(false)}
//                       className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="submit"
//                       className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//                     >
//                       Add User
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
// Sidebar.js

// Sidebar.js
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div className="bg-gray-800 text-white w-56 h-screen ">
//       <div className="flex flex-col items-center py-8">
//         <ul className="space-y-6">
//             <br/>
//           <li>
//             <Link to="/dashboard" className="text-lg hover:text-blue-500">Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/user-management" className="text-lg hover:text-blue-500">User Management</Link>
//           </li>
//           <li>
//             <Link to="/role-management" className="text-lg hover:text-blue-500">Role Management</Link>
//           </li>
//           <li>
//             <Link to="/permission" className="text-lg hover:text-blue-500">Permissions</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  // State to manage the sidebar visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar open/close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to toggle sidebar on mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-4 text-white bg-black-500 fixed top-4 left-4 z-50"
      >
        <span className="text-2xl">{isOpen ? 'X' : '☰'}</span>
      </button>

      {/* Sidebar */}
      <div
        className={`bg-blue-950 text-white w-56 h-screen fixed top-0 left-0 z-40 transform transition-transform md:relative md:block ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex flex-col items-center py-8">
          <ul className="space-y-6">
            <br />
            <li>
              <Link to="/dashboard" className="text-lg hover:text-blue-500">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/user-management" className="text-lg hover:text-blue-500">
                User Management
              </Link>
            </li>
            <li>
              <Link to="/role-management" className="text-lg hover:text-blue-500">
                Role Management
              </Link>
            </li>
            <li>
              <Link to="/permission" className="text-lg hover:text-blue-500">
                Permissions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay to close the sidebar when it's open on mobile */}
      <div
        className={`md:hidden fixed inset-0 bg-black opacity-50 z-30 ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={toggleSidebar}
      />
    </div>
  );
};

export default Sidebar;
