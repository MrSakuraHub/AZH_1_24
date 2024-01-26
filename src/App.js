import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import './index.css';
import SignUp from './pages/SignUp';
import Wallet from './pages/Wallet';
import './styles/style.css';
import './styles/styleguide.css';


function App() {
  return(
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
