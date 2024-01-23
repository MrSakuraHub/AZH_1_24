import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import './App.css';
import SignUp from './pages/SignUp';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='signup' element={<SignUp />}/>
          <Route path='wallet' element={<Wallet />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
