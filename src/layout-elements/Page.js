import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../pages/Home';
import Projekty from '../pages/Projekty';
import Kontakt from '../pages/Kontakt';


const Page = () => {
    return ( 
        <>     
        <Route path="/" exact component={Home}/>
        <Route path="/projekty" component={Projekty}/>
        <Route path="/kontakt" component={Kontakt}/>     
        </>
     );
}
 
export default Page;