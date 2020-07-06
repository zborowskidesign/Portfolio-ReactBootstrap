import React, {Component} from 'react';
import './App.scss';
import{HashRouter,Route} from 'react-router-dom';
import Page from './layout-elements/Page';
import Navigation from './layout-elements/Navigation';



class App extends Component {
  state = {  }
  render() { 
    return ( 
     <HashRouter> 
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
     </HashRouter>
     );
  }
}
 

export default App;
