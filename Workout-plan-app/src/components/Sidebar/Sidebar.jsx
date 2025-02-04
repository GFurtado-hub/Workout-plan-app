import { Link } from 'react-router-dom';
import './Sidebar.css';
function Sidebar() {
  return (
    <nav className="sidebar">
      <Link to="/Login">Log In</Link>
      <Link to="/SignUp">Sign up</Link>
      <Link to="/WorkoutPlansDetails">Workout Plans</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
export default Sidebar;