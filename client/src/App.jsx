import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layouts/Navbar';
import Home from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import Upload from './pages/Upload'; 
// import { AdminLayout } from './components/layouts/Admin-Layout';
// import AdminUsers from './pages/Admin-Users'; 
// import AdminContacts from './pages/Admin-Contacts'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Admin Layout and Nested Routes */}
        {/* <Route path="/admin" element={<AdminLayout />}>
          <Route path="adminUsers" element={<AdminUsers />} />
          <Route path="adminContacts" element={<AdminContacts />} /> */}
          <Route path="upload" element={<Upload />} />
        {/* </Route> */}

      </Routes>
    </Router>
  );
}

export default App;
