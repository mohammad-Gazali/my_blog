import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Dashboard, Home } from './pages';


function App() {
  return (
    <div className='min-h-screen relative'>
        <Router>
          <main className='absolute top-0 left-0 right-0 h-full'>
            <Routes>
              <Route path="/" element={<Home />} />  
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </Router>
    </div>
  );
}

export default App;
