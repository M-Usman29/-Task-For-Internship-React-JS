import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
  {/*style={{ minHeight: '100vh', background: 'inherit' }}*/}
  
  return (
  <>
<Home myname="USMAN"  home="Home" portfolio="Portfolio" contact="Contact"></Home>
  
  <Footer ftrname="USMAN"></Footer>
  </>
  );
}

export default App;
