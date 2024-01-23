import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import './App.css';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='signup' element={<SignUp />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
