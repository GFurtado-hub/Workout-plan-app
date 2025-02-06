import Logo from '../../assets/kaboom.png';
import './Navbar.css';
import '../Sidebar/Sidebar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" className='logo'/>
      <h1><strong>GLADIATOR FITNESS</strong></h1>
    </nav>
  );
}
export default Navbar;