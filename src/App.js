// import {BrowserRouter as Link, Router, Routes, Route} from 'react-router-dom';
import './App.css';
import {Navbar, Footer} from './main_sections';
import { Home } from './pages';


function App() {
  return (
    <div className='min-h-screen relative' style={{'height': '400vh'}}>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
