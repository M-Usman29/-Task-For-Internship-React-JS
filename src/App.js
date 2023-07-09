import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
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
  
              <Home myname="USMAN"  home="Home" portfolio="Portfolio" contact="Contact"></Home>
                  <Routes>
                        <Route path="/Home" element={<Home ></Home>}></Route>
                        <Route path="/Contact" element={<Contact ></Contact>}></Route>
 
  
                   </Routes>
              <Footer ftrname="USMAN"></Footer>
    </Router>
  );
}

export default App;
