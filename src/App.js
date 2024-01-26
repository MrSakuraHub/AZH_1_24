import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import './index.css';
import SignUp from './pages/SignUp';
import Wallet from './pages/Wallet';
<<<<<<< HEAD
import './styles/style.css';
import './styles/styleguide.css';
=======
import { FormProvider } from './context/FormContext';
import Form from './formComponents/form';
>>>>>>> 815f82e954b7ee649195fc3c6afd44c8274c0fbd

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
