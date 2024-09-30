import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './login';
import Dashboard from './Dashboard';
import Users from './USER/Users';
import Navbar from './NavBar';
import AddUser from './USER/AddUser';
import UnderMaintanance from './UnderMaintanance';

import UserUpdate from './USER/UserUpdate';

function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Users" element={<Users />}></Route>
        <Route path="/Navbar" element={<Navbar />}></Route>
        <Route path="/AddUser" element={<AddUser />}></Route>
        <Route path="/UserUpdate/:id" element={<UserUpdate />}></Route>
        <Route path="*" element={<UnderMaintanance />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
