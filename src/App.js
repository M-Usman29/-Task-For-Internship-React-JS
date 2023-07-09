import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  /*Link*/
} from "react-router-dom";
function App() {
  {/*style={{ minHeight: '100vh', background: 'inherit' }}*/}
  
  return (
    <Router>
  
              <Navbar myname="USMAN"  home="Home" portfolio="Portfolio" contact="Contact"></Navbar>
                  <Routes>
                  <Route path="/Portfolio" element={<Portfolio ></Portfolio>}></Route>
                      <Route path="/Contact" element={<Contact ></Contact>}></Route>
 
  
                   </Routes>
              <Footer  ftrname="USMAN"></Footer>
    </Router>
  );
}

export default App;
