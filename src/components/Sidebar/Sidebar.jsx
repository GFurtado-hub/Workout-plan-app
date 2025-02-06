import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>☰</button>
      {isOpen && (
        <div className="sidebar">
          <Link to="/Login">Log In</Link>
          <Link to="/SignUp">Sign up</Link>
          <Link to="/WorkoutPlansDetails">Workout Plans</Link>
          <Link to="/about">About</Link>
        </div>
      )}
    </div>
  );
}

export default Sidebar;