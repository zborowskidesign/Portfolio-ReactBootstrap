import React, {Component} from 'react';
import './App.scss';
import{BrowserRouter,Route} from 'react-router-dom';
import Page from './layout-elements/Page';
import Navigation from './layout-elements/Navigation';



class App extends Component {
  state = {  }
  render() { 
    return ( 
     <BrowserRouter> 
     <div className="App">
       <main>
         <aside>
           {<Navigation/>}
         </aside>
         <section className="page-structur">
           <Page/>
         </section>
       </main>
     </div>
     </BrowserRouter>
     );
  }
}
 

export default App;
