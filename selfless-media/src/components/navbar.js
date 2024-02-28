import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  return (
    <>
    <nav className="navbar">
        <div className="navbar-conatiner">
            <Link to="/" className="navbar-logo">
                SELFLESS MEDIA
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/1' className='nav-links' onClick={closeMobileMenu}>
                        1
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/2' className='nav-links' onClick={closeMobileMenu}>
                        2
                    </Link>
                </li>
            </ul>
        </div>
    </nav>

    </>
  )
}

export default Navbar