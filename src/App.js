import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  /*Link*/
} from "react-router-dom";
function App() {

  
  return (
    <Router>
  
              <Navbar myname="USMAN"  home="Home" portfolio="Portfolio" contact="Contact"></Navbar>
                
                  <Routes>
                  <Route path="/" element={<Home intro="Hello I'm USMAN" det1="Since beginning my journey as a freelance designer nearby 7 years ago, I 've done remote work for agencies, consulted for startup, and collaborated with talented people to create digital products."></Home>} />
                  <Route path="/Portfolio" element={<Portfolio heading="Projects"></Portfolio>}></Route>
                      <Route path="/Contact" element={<Contact ></Contact>}></Route>
 
  
                   </Routes>
              <Footer  ftrname="USMAN"></Footer>
    </Router>
  );
}

export default App;
