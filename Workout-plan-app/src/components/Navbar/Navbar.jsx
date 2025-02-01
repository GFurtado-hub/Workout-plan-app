import './Navbar.css'
import Logo from '../../assets/kaboom.png'
import {Link} from 'react-router-dom'


function Navbar() {
    
    return(
        <nav className="navbar">
       
      <a>
      < img src={Logo} alt="Logo" className='logo'/>
      </a>
      
      <Link>Log In</Link>
      <Link>Sign up</Link>
      
        
      
    </nav>
    )
}


export default  Navbar;