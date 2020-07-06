import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../pages/Home';
import Przelicznik from '../pages/Przelicznik';
import Kontakt from '../pages/Kontakt';

const Page = () => {
    return ( 
        <>     
        <Route path="/" exact component={Home}/>
        <Route path="/przelicznik" component={Przelicznik}/>
        <Route path="/kontakt" component={Kontakt}/>     
        </>
     );
}
 
export default Page;