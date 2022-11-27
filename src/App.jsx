import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar, Footer} from './components';
import { Home } from './pages';


function App() {
  return (
    <div className='min-h-screen relative' style={{'height': '400vh'}}>
        <Router>
          <Navbar />
          <main className='absolute top-0 left-0 right-0'>
            <Routes>
              <Route path="/" element={<Home />} />  
            </Routes>
          </main>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
