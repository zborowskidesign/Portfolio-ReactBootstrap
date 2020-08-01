import React from 'react';
import {NavLink} from 'react-router-dom';
import dotesimg from '../images/dotes.gif';

const Navigation = () => {
    return ( 
        <>
         <nav style={{zIndex:"2"}}>
            <ul>
            <li>
                <NavLink to= "/">O mnie</NavLink>
            </li>
            <li>
            <NavLink to="projekty">Projekty</NavLink>
            </li>
            <li>
                <NavLink to="kontakt">Kontakt</NavLink>
            </li>
            </ul>
        </nav>   
    <img className="dotes1" src={dotesimg}></img>
    <img className="dotes2" src={dotesimg}></img>
</>
     );
}
 
export default Navigation;