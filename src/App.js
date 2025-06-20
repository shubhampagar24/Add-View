import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddItem from './components/AddItem';
import ViewItems from './components/ViewItems';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <Link className="navbar-brand d-flex align-items-center" to="/">
    <img
      src="https://img.icons8.com/color/48/add-shopping-cart--v1.png"
      alt="Logo"
      width="40"
      height="40"
      className="me-2"
    />
    <span>Item Manager</span>
  </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/">View Items</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/add">Add Items</Link></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<ViewItems />} />
          <Route path="/add" element={<AddItem />} />
        </Routes>
      </div>
    </Router>
  );
}
