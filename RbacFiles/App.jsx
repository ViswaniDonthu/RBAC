

 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavbarRbac from './NavbarRbac';
import Sidebar from './RbacApp';
import Dashboard from './RbacDashboard';
import UserManagement from './UserManagement'; 
import RoleManagement from './RoleManagement'; 
import Permissions from './Permissions';
const App = () => {
  return (
  //  <Dashboard></Dashboard>
    <Router>
       <div
  className="flex h-screen"
  style={{
    backgroundImage: "url(https://img.freepik.com/free-vector/gradient-abstract-wireframe-background_23-2149009903.jpg?t=st=1733292133~exp=1733295733~hmac=d78622a7921df9b35ac42000b74a79eb788cd03044ca77fa1dd2e210a0956d22)",
    backgroundSize: 'cover', // Ensures the image covers the full screen
    backgroundPosition: 'center', // Centers the background image
    backgroundRepeat: 'no-repeat' // Prevents image repetition
  }}
>
        <Sidebar />
        <div className="flex-1 ">
          <NavbarRbac />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/role-management" element={<RoleManagement />} />
            <Route path="/permission" element={<Permissions/>}/>
          </Routes>
        </div>
      </div>
    </Router> 
   
  )
};
export default App;









