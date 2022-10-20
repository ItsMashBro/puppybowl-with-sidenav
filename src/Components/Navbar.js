import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return(
        <nav>
            <Link to='Settings'>Settings</Link>
            <Link to='About'>About Us</Link>
            <Link to='Homepage'>Puppy Roster</Link>
        </nav>
    )
}

export default Navbar