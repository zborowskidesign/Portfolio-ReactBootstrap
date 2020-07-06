import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return ( 
        <nav>
            <li>
                <NavLink to= "/">O apliakcji</NavLink>
            </li>
            <li>
                <NavLink to="przelicznik">Przelicznik</NavLink>
            </li>
            <li>
                <NavLink to="kontakt">Kontakt</NavLink>
            </li>
        </nav>

     );
}
 
export default Navigation;