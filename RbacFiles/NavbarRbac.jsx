// // Navbar.js

// import  { useState } from 'react';
// import { Link } from 'react-router-dom';

// const NavbarRbac = () => {
//   // State to manage the toggle of the profile menu
//   const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

//   // Function to toggle the profile dropdown menu
//   const toggleProfileMenu = () => {
//     setIsProfileMenuOpen(!isProfileMenuOpen);
//   };

//   return (
//     <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
//       {/* Logo or Brand Name */}
//       <div className="text-2xl font-semibold">
//         <Link to="/" className="text-white hover:text-gray-300">Admin Dashboard</Link>
//       </div>

//       {/* Hamburger Menu for mobile */}
//       <button
//         className="lg:hidden text-white"
//         onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
//       >
//         <i className="fas fa-bars"></i>
//       </button>

//       {/* Navbar Actions */}
//       <div className="flex items-center space-x-6">
//         {/* Notifications */}
//         <button className="text-white hover:text-gray-300">
//           <i className="fas fa-bell"></i>
//         </button>

//         {/* Profile Button */}
//         <div className="relative">
//           <button
//             className="text-white hover:text-gray-300"
//             onClick={toggleProfileMenu} // Toggle the profile menu on click
//           >
//             <i className="fas fa-user-circle"></i>
//           </button>

//           {/* Profile Dropdown Menu */}
//           {isProfileMenuOpen && (
//             <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48">
//               <ul>
//                 <li className="px-4 py-2 hover:bg-gray-100">
//                   <Link to="/profile" className="text-gray-700">Profile</Link>
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100">
//                   <Link to="/settings" className="text-gray-700">Settings</Link>
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100">
//                   <button className="text-gray-700">Logout</button>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavbarRbac;
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarRbac = () => {
  // State to manage the toggle of the profile menu and mobile menu
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the profile dropdown menu
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-blue-950 text-white p-4 flex justify-between items-center">
      {/* Logo or Brand Name */}
      
         {/* <div className="text-2xl font-semibold">
        <Link to="/" className="text-white p-12 hover:text-gray-300 ">Admin Dashboard</Link>
      </div>    */}
      <div className="perspective-1000">
  <div className="text-2xl font-semibold">
    <Link
      to="/"
      className="text-white p-12 hover:text-gray-300 transform hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out"
    >
      Admin Dashboard
    </Link>
  </div>
</div>


      {/* Hamburger Menu for mobile */}
      <button
        className="lg:hidden text-white"
        onClick={toggleMobileMenu} // Toggle the mobile menu
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Navbar Actions (Desktop and larger screens) */}
      <div className="flex items-center space-x-6 hidden lg:flex">
        {/* Notifications */}
        <button className="text-white hover:text-gray-300">
          <i className="fas fa-bell"></i>
        </button>

        {/* Profile Button with dropdown (Visible on large screens) */}
        <div className="relative">
          <button
            className="text-white hover:text-gray-300"
            onClick={toggleProfileMenu} // Toggle the profile menu on click
          >
            <i className="fas fa-user-circle"></i>
          </button>

          {/* Profile Dropdown Menu (Visible only on large screens) */}
          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/profile" className="text-gray-700">Profile</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/" className="text-gray-700">Settings</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <button className="text-gray-700">Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Settings */}
        {/* <Link to="/settings" className="text-white hover:text-gray-300">
          <i className="fas fa-cogs"></i>
        </Link> */}
      </div>

      {/* Mobile Menu (Visible only on small screens) */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 p-4 rounded-lg lg:hidden">
          <ul>
            <li className="py-2 hover:bg-gray-700">
              <Link to="/" className="text-white">Notifications</Link>
            </li>
            <li className="py-2 hover:bg-gray-700">
              <Link to="/" className="text-white">Settings</Link>
            </li>
            <li className="py-2 hover:bg-gray-700">
              <Link to="/" className="text-white">Profile</Link>
            </li>
            <li className="py-2 hover:bg-gray-700">
              <button className="text-white">Logout</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarRbac;
