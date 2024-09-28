import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './login';
import Dashboard from './Dashboard';
import Users from './Users';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Users" element={<Users />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
