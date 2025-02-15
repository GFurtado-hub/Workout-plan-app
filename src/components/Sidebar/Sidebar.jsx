import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>☰</button>
      
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Link to="/">Home Page</Link>
        <Link to="/workout-plan-details">Workout Plans</Link>
        <Link to="/add-new-workout">Add New Workout</Link>
        <Link to="/your-progresses">Your Progress</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Sidebar;
