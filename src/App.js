

import './App.css';
import './superfish/superfish';


import { Nav } from './components/Nav';
import { Aboutme } from './components/Aboutme';

import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Backtop } from './components/Backtop';
import{ Service} from './components/Services'


function App() {
 
  return (
    <div className="App">
    
      <Nav/>
      <Aboutme/>
      
      <Service/>
      <Contact/>
     <Footer/>  
      <Backtop/>
    </div>
  );
}

export default App;
