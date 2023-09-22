import React, {useState} from 'react'
import "./NavbarStyles.css";
import { MenuItems } from './MenuItems';
const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(!clicked);
    }
  return (
    
    <nav className="NavbarItems">
        <h1 className="navbar-logo">Space</h1>
        <div className="icons-menu" onClick={handleClick}>
            <i className={clicked ? 
            "fas fa-times" : "fas fa-bars"}> 
            </i>
            
        </div>
        <ul className={clicked ? "nav-menu active": "nav-menu" }>  
            {MenuItems.map((item, index) =>{
                return (
                    <li key={index}>
                    <a className={item.cName} href="/">
                    <i className={item.icon}>
                    </i> {item.title}
                    </a>
                    </li>
                )
            }
            )}
            <button>Sign Up</button>
        </ul>
    </nav>
  )
}

export default Navbar