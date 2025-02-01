import './Navbar.css';
import Logo from '../../assets/kaboom.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="container">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>

      <div className="auth-links">
      <Link to="/WorkoutPlansDetails">Workouts Preview</Link>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>

      </div>

     
    </div>
  );
}

export default Navbar;
